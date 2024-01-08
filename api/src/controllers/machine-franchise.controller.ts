import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Machine,
  Franchise,
} from '../models';
import {MachineRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class MachineFranchiseController {
  constructor(
    @repository(MachineRepository)
    public machineRepository: MachineRepository,
  ) { }

  @get('/machines/{id}/franchise', {
    responses: {
      '200': {
        description: 'Franchise belonging to Machine',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Franchise)},
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async getFranchise(
    @param.path.number('id') id: typeof Machine.prototype.id,
  ): Promise<Franchise> {
    return this.machineRepository.franchise(id);
  }
}
