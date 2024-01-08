import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
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
  requestBody,
} from '@loopback/rest';
import { Machine } from '../models';
import { MachineRepository } from '../repositories';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class MachineController {
  constructor(
    @repository(MachineRepository)
    public machineRepository: MachineRepository,
  ) { }

  @post('/machines', {
    responses: {
      '200': {
        description: 'Machine model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Machine) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, {
            title: 'NewMachine',
            exclude: ['id'],
          }),
        },
      },
    })
    machine: Omit<Machine, 'id'>,
  ): Promise<Machine> {
    return this.machineRepository.create(machine);
  }

  @get('/machines/count', {
    responses: {
      '200': {
        description: 'Machine model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(Machine)) where?: Where<Machine>,
  ): Promise<Count> {
    return this.machineRepository.count(where);
  }

  @get('/machines', {
    responses: {
      '200': {
        description: 'Array of Machine model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Machine, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Machine)) filter?: Filter<Machine>,
  ): Promise<Machine[]> {
    return this.machineRepository.find(filter);
  }

  @get('/allMachines', {
    responses: {
      '200': {
        description: 'Array of Machine model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Machine, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findAllMachines(
    @param.query.object('filter', getFilterSchemaFor(Machine)) filter?: Filter<Machine>,
  ): Promise<any> {
    return this.machineRepository.find({
      include: [
        {
          relation: 'franchise',
        },
      ],
    });
  }

  @patch('/machines', {
    responses: {
      '200': {
        description: 'Machine PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, { partial: true }),
        },
      },
    })
    machine: Machine,
    @param.query.object('where', getWhereSchemaFor(Machine)) where?: Where<Machine>,
  ): Promise<Count> {
    return this.machineRepository.updateAll(machine, where);
  }

  @get('/machines/{id}', {
    responses: {
      '200': {
        description: 'Machine model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Machine, { includeRelations: true }),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Machine)) filter?: Filter<Machine>
  ): Promise<Machine> {
    return this.machineRepository.findById(id, filter);
  }

  @patch('/machines/{id}', {
    responses: {
      '204': {
        description: 'Machine PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, { partial: true }),
        },
      },
    })
    machine: Machine,
  ): Promise<void> {
    await this.machineRepository.updateById(id, machine);
  }

  @put('/machines/{id}', {
    responses: {
      '204': {
        description: 'Machine PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() machine: Machine,
  ): Promise<void> {
    await this.machineRepository.replaceById(id, machine);
  }

  @del('/machines/{id}', {
    responses: {
      '204': {
        description: 'Machine DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.machineRepository.deleteById(id);
  }



  //   @post('/sendPushNoti', {
  //     responses: {
  //       '200': {
  //         description: 'Promotional Code',
  //         content: {
  //           'application/json': {
  //             // schema: getJsonSchemaRef(sendPushSchema),
  //           },
  //         },
  //       },
  //     },
  //   })
  //   // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  //   async InstacouponValidation(@requestBody(sendPushBody)
  //   // couponData: sendPushSchema,
  //     // @inject(AuthenticationBindings.CURRENT_USER)
  //     // currentUser: UserProfile
  //   ): Promise<any> {

  //     return "Coupon";
  //   }
}
