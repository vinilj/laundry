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
  Machine,
} from '../models';
import { FranchiseRepository } from '../repositories';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class FranchiseMachineController {
  constructor(
    @repository(FranchiseRepository) protected franchiseRepository: FranchiseRepository,
  ) { }

  @get('/franchises/{id}/machines', {
    responses: {
      '200': {
        description: 'Array of Machine\'s belonging to Franchise',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Machine) },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Machine>,
  ): Promise<Machine[]> {
    return this.franchiseRepository.machines(id).find(filter);
  }

  @post('/franchises/{id}/machines', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Machine) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof Franchise.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, {
            title: 'NewMachineInFranchise',
            exclude: ['id'],
            optional: ['franchiseId']
          }),
        },
      },
    }) machine: Omit<Machine, 'id'>,
  ): Promise<Machine> {
    return this.franchiseRepository.machines(id).create(machine);
  }

  @patch('/franchises/{id}/machines', {
    responses: {
      '200': {
        description: 'Franchise.Machine PATCH success count',
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
          schema: getModelSchemaRef(Machine, { partial: true }),
        },
      },
    })
    machine: Partial<Machine>,
    @param.query.object('where', getWhereSchemaFor(Machine)) where?: Where<Machine>,
  ): Promise<Count> {
    return this.franchiseRepository.machines(id).patch(machine, where);
  }

  @del('/franchises/{id}/machines', {
    responses: {
      '200': {
        description: 'Franchise.Machine DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Machine)) where?: Where<Machine>,
  ): Promise<Count> {
    return this.franchiseRepository.machines(id).delete(where);
  }
}
