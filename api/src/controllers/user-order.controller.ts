import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  FilterExcludingWhere,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
  getFilterSchemaFor,
} from '@loopback/rest';
import {
  User,
  Order,
  Franchise,
  Gst,
} from '../models';
import { UserRepository, FranchiseRepository, OrderRepository, GstRepository } from '../repositories';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';
import { walletDeduction, updateWallet, walletDeductionHistory, RewardWallet } from '../services/wallet.service';
import { sendMail } from '../services/email.service';
import { inject } from '@loopback/core';
import { UserProfile, securityId } from '@loopback/security';
import { updateuserData } from '../services/order.service';
import { sendPushNotification } from '../services/sns.service';
import { orderStatusSMS } from '../services/sms.service';
import { OrderController } from './order.controller'
import { use } from 'should';
export class UserOrderController {
  discount: any;

  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
    @repository(FranchiseRepository)
    public franchiseRepository: FranchiseRepository,
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
    @repository(GstRepository)
    public gstRepository: GstRepository,
  ) { }

  @get('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'Array of Order\'s belonging to User',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Order) },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order>,
  ): Promise<any> {
    let orderData = this.userRepository.orders(id).find({
      include: [
        {
          relation: 'franchise',
        },
      ],
    })
    return orderData;
  }

  @post('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'Order Created',
        content: { 'application/json': { schema: getModelSchemaRef(Order) } },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
	    ): Promise<any> {
		    if (order.opertationType == "self operated" && order.paymentStatus == "paid") {
      let customerReward = (await this.customerReward(order));
      order.rewardAmount = customerReward.rewardAmount;
      order.orderTimestamp = Date.now();
      order.settlement = false;
      console.log("**********************");
      console.log(order);
      console.log("**********************");
      let resp = this.userRepository.orders(id).create(order);
      walletDeduction(id, order.walletDeductions);
      RewardWallet(id, (await resp));
      walletDeductionHistory((await resp));
      updateuserData((await resp).userId);
      this.pushNotification((await resp).userId, (await resp));
      (await resp).body = "orderCreation";
      orderStatusSMS((await resp));
      let updateOrder: any = {};
      let d = new Date();
      updateOrder.invoice = String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()) + (await resp).id!;
      order.rewardAmount = customerReward.rewardAmount;
      this.updateInvoice((await resp).id!, updateOrder);
      let orderObject = (await resp);
      orderObject.date = d.getDate() + '/' + Number(d.getMonth() + 1) + '/' + d.getFullYear();
      if (orderObject.promoCode == null) {
        orderObject.promoCode = '';
      }
      if (orderObject.promoDeductions == null || orderObject.promoDeductions == 0) {
        orderObject.promoDeductions = 0;
      }
      orderObject.user = await this.getUserData(orderObject.userId);
      let originalPrice = Number((await resp).transactionAmount!);
      let gst = orderObject.gst = (await this.getGst(1)).gstValue;
      orderObject.invoice = updateOrder.invoice;
      let taxableAmount: number = orderObject.taxableAmount = Number((100 * originalPrice / (100 + gst)).toFixed(2))
      orderObject.taxAmount = (originalPrice - taxableAmount).toFixed(2);
      sendMail(orderObject);
      return Promise.resolve({ message: "Order Created", status: 200, order: (await resp) });
    }

    if (order.opertationType == "drop off") {
      let resp = this.userRepository.orders(id).create(order);
      this.pushNotification((await resp).userId, (await resp));
      return Promise.resolve({ message: "Order Created", status: 200, order: (await resp) });
    }
  }

  async pushNotification(id: number, order: any,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>
  ): Promise<User> {
    let userData = await this.userRepository.findById(id, filter);
    let pushData = {
      token: [userData.deviceToken],
      body: 'Your Order is created Successfully \n Order id ' + order.id + ' has been successfully booked. \n Thanks for Choosing Coin Laundromat',
      head: 'Order Status'
    }
    sendPushNotification(pushData)
    return userData
  }

  async customerReward(order: any,
    @param.query.object('filter', getFilterSchemaFor(Franchise)) filter?: Filter<Franchise>
  ): Promise<Franchise> {
    let franchisediscount = this.franchiseRepository.findById(order.franchiseId, filter);
    let discount = Math.floor((order.amount * (await franchisediscount).discount!) / 100);
    order.rewardAmount = discount;
    return order;
  }

  @patch('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'User.Order PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Partial<Order>,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.userRepository.orders(id).patch(order, where);
  }

  @del('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'User.Order DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.userRepository.orders(id).delete(where);
  }

  async updateInvoice(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Order,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  async getGst(
    @param.path.number('id') id: number,
    @param.filter(Gst, { exclude: 'where' }) filter?: FilterExcludingWhere<Gst>
  ): Promise<Gst> {
    return this.gstRepository.findById(id, filter);
  }

  async getUserData(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>
  ): Promise<User> {
    let userData = await this.userRepository.findById(id, filter);
    let userDetails: any = {}
    userDetails.name = userData.firstName + ' ' + userData.lastName;
    userDetails.phone = userData.mobile;
    userDetails.email = userData.email;
    return userDetails;
  }
}
