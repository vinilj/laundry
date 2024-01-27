import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  FilterExcludingWhere,
  AnyType,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  Response,
  RestBindings,
  requestBody,
  operation,
  HttpErrors,
  JsonBodyParser,
} from '@loopback/rest';
import { Order, User, Franchise, Gst, WalletHistory } from '../models';
import { OrderRepository, orderCornJob, FranchiseRepository, MachineRepository, UserRepository, WalletRepository, GstRepository, WalletHistoryRepository, DashboardDetails } from '../repositories';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';
import { walletDeduction, RewardWallet, walletDeductionHistory } from '../services/wallet.service';
import { updateuserData } from '../services/order.service';
import { sendPushNotification } from '../services/sns.service';
import { sendMail } from '../services/email.service';
import { orderStatusSMS } from '../services/sms.service';
import { DashboardDetailsRequestBody } from './specs/user.controller.spec';

import { inject } from '@loopback/context';
import { UserProfile } from 'aws-sdk/clients/opsworks';
import { type } from 'os';
import _ from 'lodash';

const cron = require('node-cron')

// cron.schedule('* * * * *', async () => {
//   console.log('running a task every minute');
//   let Order = OrderController.prototype.find();
// })

export class OrderController {


  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
    @repository(FranchiseRepository)
    public franchiseRepository: FranchiseRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(WalletRepository)
    public walletRepository: WalletRepository,
    @repository(GstRepository)
    public gstRepository: GstRepository,
    @repository(WalletHistoryRepository)
    public walletHistoryRepository: WalletHistoryRepository,
    @repository(MachineRepository)
    public machineRepository: MachineRepository,
  ) { }

  @post('/orders', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Order) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrder',
            exclude: ['id'],
          }),
        },
      },
    })
    order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.orderRepository.create(order);
  }

  @get('/orders/count', {
    responses: {
      '200': {
        description: 'Order model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderRepository.count(where);
  }

  @get('/orders', {
    responses: {
      '200': {
        description: 'Array of Order model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Order, { includeRelations: true }),
              
            },
          },
        },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: any,
  ): Promise<any> {
    console.log('Jac Log: ',filter)
     let where :any = {}
     if(!filter.startDate){
      const currentDate = new Date()
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
      const day = currentDate.getDate().toString().padStart(2, '0');
      const year = currentDate.getFullYear();
      // Format the date as MM/DD/YYYY
     // filter.startDate = `${month}/${day}/${year}`;
      where.startDate = `${month}/${day}/${year}`;
    } else {
      where.startDate = filter.startDate;
    }
    let orders = this.orderRepository.find({
      include: [
        {
          relation: 'user',
        },
        { relation: 'franchise' }
      ],
      offset: filter?.offset,
      limit: filter?.limit,
      where: {
        startTime: filter?.startDate
      }
    });
    return orders;
  }


  @patch('/orders', {
    responses: {
      '200': {
        description: 'Order PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true, }),
        },
      },
    })
    order: Order,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderRepository.updateAll(order, { limit: 10, offset:0 });
  }

  @get('/orders/{id}', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Order, { includeRelations: true }),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter: Filter<Order> = {offset:0, limit:10}
  ): Promise<Order> {
    return this.orderRepository.findById(id, filter);
  }

  @patch('/orders/{id}', {
    responses: {
      '204': {
        description: 'Order PATCH success',
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Order,
  ): Promise<Order> {
    if (order.paymentStatus == 'paid') {
      let orderData = await this.getOrderData(id);
      let customerReward = (await this.customerReward(orderData));
      this.updateWallet(orderData.userId, customerReward, order);
      this.walletDeductionHistory(orderData, order);
      updateuserData(customerReward.userId)
      this.pushNotification(order, orderData)
      let d = new Date();
      let invoice = order.invoice = String(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()) + orderData.id);
      order.rewardAmount = customerReward.rewardAmount;
      await this.orderRepository.updateById(id, order);
      orderData.body = "dropoffpayment";
      let orderObject: any = orderData;
      orderObject.invoice = invoice;
      orderObject.date = d.getDate() + '/' + Number(d.getMonth() + 1) + '/' + d.getFullYear();
      if (orderObject.promoCode == null) {
        orderObject.promoCode = '';
      }
      if (orderObject.promoDeductions == null || orderObject.promoDeductions == 0) {
        orderObject.promoDeductions = 0;
      }
      orderObject.paymentStatus = order.paymentStatus;
      orderObject.walletDeductions = order.walletDeductions;
      orderObject.promoDeductions = order.promoDeductions;
      orderObject.transactionId = order.transactionId;
      orderObject.transactionAmount = order.transactionAmount;
      orderObject.user = await this.getUserData(orderObject.userId);
      let originalPrice = Number(order.transactionAmount);
      let gst = orderObject.gst = (await this.getGst(1)).gstValue;
      let taxableAmount: number = orderObject.taxableAmount = Number((100 * originalPrice / (100 + gst)).toFixed(2))
      orderObject.taxAmount = (originalPrice - taxableAmount).toFixed(2);
      sendMail(orderObject);
      orderStatusSMS(orderData)
    }
    else {
      let resp = await this.orderRepository.updateById(id, order);
      let orderData = await this.getOrderData(id);
      if (order.orderStatus == 'delivered') {
        orderData.body = "dropofforderdelivery";
        sendMail(orderData);
        orderStatusSMS(orderData)
      }
      if (order.orderStatus == 'order received') {
        orderData.body = "dropofforderstatus";
        sendMail(orderData);
        orderStatusSMS(orderData)
      }
      this.pushNotification(order, orderData)
    }
    order.code = 200;
    order.message = "Updated Successfully";
    return order;
  }

  async updateWallet(id: number, order: any, updateOrder: any,
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>): Promise<any> {
    // let WalletDetails = await this.walletRepository.findById(id, filter);
    let WalletDetails = await this.walletRepository.findOne({
      where: {
        userId: id,
      }
    });
    let walletbalance: number = WalletDetails!.balance!;
    let walletDeduction: number = updateOrder.walletDeductions;
    let wallet: any = {};
    wallet.balance = walletbalance - walletDeduction + order.rewardAmount;
    this.walletRepository.updateById(WalletDetails?.id, wallet);
    this.rewardPush(id, order)
    return WalletDetails;
  }
  async walletDeductionHistory(orderData: any, order: any) {
    let franchiseDetails = await this.franchiseRepository.findOne({
      where: {
        id: orderData.franchiseId,
      }
    });
    if (order.walletDeductions > 0) {
      let walletObject: any = {
        "outletName": franchiseDetails?.name,
        "orderId": orderData.id,
        "coins": order.walletDeductions,
        "transactionType": "Debit",
        "userId": orderData.userId
      }
      this.createWalletHistory(walletObject)
    }
    if (orderData.rewardAmount > 0) {
      let walletObject: any = {
        "outletName": franchiseDetails?.name,
        "orderId": orderData.id,
        "coins": orderData.rewardAmount,
        "transactionType": "credit",
        "userId": orderData.userId
      }
      this.createWalletHistory(walletObject)
    }
  }

  async createWalletHistory(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletHistory, {
            title: 'NewWalletHistory',
            exclude: ['id'],
          }),
        },
      },
    })
    walletHistory: Omit<WalletHistory, 'id'>,
  ): Promise<WalletHistory> {
    return this.walletHistoryRepository.create(walletHistory);
  }



  async rewardPush(id: number, order: any,
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>): Promise<any> {
    let userData = await this.userRepository.findById(id, filter);
    let pushData = {
      token: [userData.deviceToken],
      body: 'Rewards of ' + order.rewardAmount + ' coins for order id ' + order.id + ' added to your wallet \n Thanks for using Coin Laundromat',
      head: 'Order Rewards'
    }//
    sendPushNotification(pushData)
    return userData
  }

  async pushNotification(order: any, orderData: any,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>
  ): Promise<User> {
    let userData = await this.userRepository.findById(orderData.userId, filter);
    var pushData;
    if (order.paymentStatus == 'paid') {
      pushData = {
        token: [userData.deviceToken],
        body: 'Dear Customer, Your Order No:' + orderData.id + ' has been ' + orderData.orderStatus + ' and Your total billing amount is Rs.' + orderData.amount + ' has paid',
        head: 'Order Status'
      }
    }
    else {
      pushData = {
        token: [userData.deviceToken],
        body: 'Dear Customer, Your Order No:' + orderData.id + ' has been ' + orderData.orderStatus + ' and Your total billing amount is Rs.' + orderData.amount + ' has due',
        head: 'Order Status'
      }
    }
    sendPushNotification(pushData)
    return userData
  }

  async getOrderData(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>
  ): Promise<any> {
    let orderDetails = await this.orderRepository.findById(id, filter);
    return orderDetails;
  }

  async customerReward(order: any,
    @param.query.object('filter', getFilterSchemaFor(Franchise)) filter?: Filter<Franchise>
  ): Promise<Franchise> {
    let franchisediscount = this.franchiseRepository.findById(order.franchiseId, filter);
    let discount = Math.floor((order.amount * (await franchisediscount).discount!) / 100);
    order.rewardAmount = discount;
    return order;
  }


  @put('/orders/{id}', {
    responses: {
      '204': {
        description: 'Order PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders/{id}', {
    responses: {
      '204': {
        description: 'Order DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
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


  @get('/dashboardDetails/{franchiseid}/orders/{selectedDate}', {
    responses: {
      '200': {
        description: 'Array of Order\'s belonging to Franchise',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Order) },
          },
        },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findOrder(
    @param.path.number('franchiseid') franchiseid: number | null | undefined,
    @param.path.date('selectedDate') selectedDate: Date,
    @param.query.object('filter') filter?: Filter<Order>,
  ): Promise<any> {
    var res: any;
    console.log(franchiseid);
    console.log(new Date(selectedDate));
    let orderDetails = this.orderRepository.find({
      where: { id: franchiseid, startTime: new Date(selectedDate) }
    });
    console.log(await orderDetails)
    return orderDetails;
  }



  @get('/franchises/{franchiseId}/{date}', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Order, { includeRelations: true }),
          },
        },
      },
    },
  })
  async Orderdash(
    @param.path.number('franchiseId') franchiseId: number,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>
  ): Promise<Order> {
    return this.orderRepository.findById(franchiseId, filter);
  }


  @get('/get/orders', {
    responses: {
      '200': {
        description: 'Array of Order model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Order, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findorders(
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>,
  ): Promise<Order[]> {
    return this.orderRepository.find(filter);
  }

  @post('/DashboardOrders', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Order) } },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async getDashboardData(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrder',
            exclude: ['id'],
          }),
        },
      },
    })
    order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.orderRepository.create(order);
  }


  @post('/dashboarddata', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {

              },
            },
          },
        },
      },
    },
  })
  async DashBoardDatatable(@requestBody(DashboardDetailsRequestBody) DashboardDetails: DashboardDetails): Promise<any> {
    // Order Details
    console.log(DashboardDetails);
    let orderData;
    if (DashboardDetails.startDate == "" && DashboardDetails.endDate == "" || DashboardDetails.startDate == null && DashboardDetails.endDate == null) {
      orderData = await this.orderRepository.find({
        where: {
          franchiseId: DashboardDetails.franchise
        },
      })
    } else {
      orderData = await this.orderRepository.find({
        where: {
          and: [
            { franchiseId: DashboardDetails.franchise },
            { startTime: { between: [DashboardDetails.startDate, DashboardDetails.endDate] }! }
          ]
        },
      })
    }

    const totalSelfOperated = orderData.filter(element => element.opertationType == 'self operated');
    const totaldropOff = orderData.filter(element => element.opertationType == 'drop off');
    let paidAmount = 0, dueAmount = 0, totalAmount = 0;
    orderData.filter(element => {
      totalAmount += element.amount!;
      if (element.paymentStatus == 'paid') {
        paidAmount += element.amount!
      };
      if (element.paymentStatus == 'due') {
        dueAmount += element.amount!
      }
    });

    // Machine Details
    const machineData = await this.machineRepository.find({
      where: {
        franchiseId: DashboardDetails.franchise
      },
    });
    let activeMachines = 0, inactiveMachines = 0;
    machineData.filter(element => {
      if (element.status == 'active') {
        activeMachines++
      };
      if (element.status == 'inactive') {
        inactiveMachines++
      }
    });
    return Promise.resolve({ "TotalOrders": _.size(orderData), "TotalSelfOperated": _.size(totalSelfOperated), "TotaldropOff": _.size(totaldropOff), "TotalAmount": totalAmount, "PaidAmount": paidAmount, "PendingAmount": dueAmount, "TotalMachine": _.size(machineData), "ActiveMachines": activeMachines, "InactiveMachines": inactiveMachines });
  }

}


