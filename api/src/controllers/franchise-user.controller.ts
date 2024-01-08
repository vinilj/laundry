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
  User,
} from '../models';
import {FranchiseRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class FranchiseUserController {
  constructor(
    @repository(FranchiseRepository) protected franchiseRepository: FranchiseRepository,
  ) { }

  @get('/franchises/{id}/users', {
    responses: {
      '200': {
        description: 'Array of User\'s belonging to Franchise',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User[]> {
    return this.franchiseRepository.users(id).find(filter);
  }

  @get('/franchises/{id}/storeoperators', {
    responses: {
      '200': {
        description: 'Array of User\'s belonging to Franchise',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findstoreoperator(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User[]> {
    return this.franchiseRepository.users(id).find({
      where:{userType:"storeoperator"}
    });
  }

  @post('/franchises/{id}/users', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof Franchise.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInFranchise',
            exclude: ['id'],
            optional: ['franchiseId']
          }),
        },
      },
    }) user: Omit<User, 'id'>,
  ): Promise<User> {
    return this.franchiseRepository.users(id).create(user);
  }

  @patch('/franchises/{id}/users', {
    responses: {
      '200': {
        description: 'Franchise.User PATCH success count',
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
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.franchiseRepository.users(id).patch(user, where);
  }

  @del('/franchises/{id}/users', {
    responses: {
      '200': {
        description: 'Franchise.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.franchiseRepository.users(id).delete(where);
  }
}
