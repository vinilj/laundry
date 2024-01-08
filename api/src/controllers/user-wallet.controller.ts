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
  User,
  Wallet,
} from '../models';
import {UserRepository} from '../repositories';
import { PermissionKeys } from '../authorization/permission-keys';
import { authenticate } from '@loopback/authentication';

export class UserWalletController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/wallets', {
    responses: {
      '200': {
        description: 'Array of Wallet\'s belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Wallet)},
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Wallet>,
  ): Promise<Wallet[]> {
    return this.userRepository.wallets(id).find(filter);
  }

  @post('/users/{id}/wallets', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wallet)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wallet, {
            title: 'NewWalletInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) wallet: Omit<Wallet, 'id'>,
  ): Promise<Wallet> {
    return this.userRepository.wallets(id).create(wallet);
  }

  @patch('/users/{id}/wallets', {
    responses: {
      '200': {
        description: 'User.Wallet PATCH success count',
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
          schema: getModelSchemaRef(Wallet, {partial: true}),
        },
      },
    })
    wallet: Partial<Wallet>,
    @param.query.object('where', getWhereSchemaFor(Wallet)) where?: Where<Wallet>,
  ): Promise<Count> {
    return this.userRepository.wallets(id).patch(wallet, where);
  }

  @del('/users/{id}/wallets', {
    responses: {
      '200': {
        description: 'User.Wallet DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Wallet)) where?: Where<Wallet>,
  ): Promise<Count> {
    return this.userRepository.wallets(id).delete(where);
  }
}
