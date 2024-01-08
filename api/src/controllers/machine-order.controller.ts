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
  Machine,
  Order,
} from '../models';
import {MachineRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class MachineOrderController {
  constructor(
    @repository(MachineRepository) protected machineRepository: MachineRepository,
  ) { }

  @get('/machines/{id}/orders', {
    responses: {
      '200': {
        description: 'Array of Order\'s belonging to Machine',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Order)},
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order>,
  ): Promise<Order[]> {
    return this.machineRepository.orders(id).find(filter);
  }

  @post('/machines/{id}/orders', {
    responses: {
      '200': {
        description: 'Machine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Order)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof Machine.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInMachine',
            exclude: ['id'],
            optional: ['machineId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.machineRepository.orders(id).create(order);
  }

  @patch('/machines/{id}/orders', {
    responses: {
      '200': {
        description: 'Machine.Order PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {partial: true}),
        },
      },
    })
    order: Partial<Order>,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.machineRepository.orders(id).patch(order, where);
  }

  @del('/machines/{id}/orders', {
    responses: {
      '200': {
        description: 'Machine.Order DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.machineRepository.orders(id).delete(where);
  }
}
