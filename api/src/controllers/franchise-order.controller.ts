import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
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
} from '@loopback/rest';
import {
  Franchise,
  Order,
  Machine,
  User,
} from '../models';
import { FranchiseRepository, UserRepository } from '../repositories';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';
import { inject } from '@loopback/core';
import { UserProfile, securityId } from '@loopback/security';
import { walletAmount } from '../services/wallet.service'
import { sendMail } from '../services/email.service';

export class FranchiseOrderController {
  constructor(
    @repository(FranchiseRepository) protected franchiseRepository: FranchiseRepository,
  ) { }

  @get('/franchises/{id}/orders', {
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
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @inject(AuthenticationBindings.CURRENT_USER)
    currentUser: UserProfile,
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order>,
  ): Promise<any> {
    var res: any;
    let orderDetails = this.franchiseRepository.find({
      include: [
        {
          relation: 'orders',
          scope: {
            include: [{ relation: 'user' }],
          },
        },
      ],
      where: { id: id }
    });
    return orderDetails;
  }



  @get('/franchises/{franchiseid}/orders/{orderid}', {
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
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findOrder(
    @inject(AuthenticationBindings.CURRENT_USER)
    currentUser: UserProfile,
    @param.path.number('franchiseid') franchiseid: number,
    @param.path.number('orderid') orderid: number,
    @param.query.object('filter') filter?: Filter<Order>,
  ): Promise<any> {
    var res: any;
    let orderDetails = this.franchiseRepository.find({
      include: [
        {
          relation: 'orders',
          scope: {
            include: [{ relation: 'user' }],
            where: { id: orderid }
          },
        },
      ],
      where: { id: franchiseid }
    });
    return orderDetails;
  }



  @post('/franchises/{id}/orders', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Order) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof Franchise.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInFranchise',
            exclude: ['id'],
            optional: ['franchiseId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
  ): Promise<Order> {
    let resp = this.franchiseRepository.orders(id).create(order);
    return resp
  }



  @patch('/franchises/{id}/orders', {
    responses: {
      '200': {
        description: 'Franchise.Order PATCH success count',
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
    let resp = this.franchiseRepository.orders(id).patch(order, where);
    return resp;
  }

  @del('/franchises/{id}/orders', {
    responses: {
      '200': {
        description: 'Franchise.Order DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.franchiseRepository.orders(id).delete(where);
  }
}
