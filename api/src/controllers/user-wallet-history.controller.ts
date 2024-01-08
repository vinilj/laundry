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
  WalletHistory,
} from '../models';
import {UserRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class UserWalletHistoryController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/wallet-histories', {
    responses: {
      '200': {
        description: 'Array of WalletHistory\'s belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WalletHistory)},
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<WalletHistory>,
  ): Promise<WalletHistory[]> {
    return this.userRepository.walletHistories(id).find(filter);
  }

  @post('/users/{id}/wallet-histories', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(WalletHistory)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletHistory, {
            title: 'NewWalletHistoryInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) walletHistory: Omit<WalletHistory, 'id'>,
  ): Promise<WalletHistory> {
    return this.userRepository.walletHistories(id).create(walletHistory);
  }

  @patch('/users/{id}/wallet-histories', {
    responses: {
      '200': {
        description: 'User.WalletHistory PATCH success count',
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
          schema: getModelSchemaRef(WalletHistory, {partial: true}),
        },
      },
    })
    walletHistory: Partial<WalletHistory>,
    @param.query.object('where', getWhereSchemaFor(WalletHistory)) where?: Where<WalletHistory>,
  ): Promise<Count> {
    return this.userRepository.walletHistories(id).patch(walletHistory, where);
  }

  @del('/users/{id}/wallet-histories', {
    responses: {
      '200': {
        description: 'User.WalletHistory DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WalletHistory)) where?: Where<WalletHistory>,
  ): Promise<Count> {
    return this.userRepository.walletHistories(id).delete(where);
  }
}
