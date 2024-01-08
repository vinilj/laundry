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
import {WalletHistory} from '../models';
import {WalletHistoryRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class WalletHistoryController {
  constructor(
    @repository(WalletHistoryRepository)
    public walletHistoryRepository : WalletHistoryRepository,
  ) {}

  @post('/wallet-histories', {
    responses: {
      '200': {
        description: 'WalletHistory model instance',
        content: {'application/json': {schema: getModelSchemaRef(WalletHistory)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
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

  @get('/wallet-histories/count', {
    responses: {
      '200': {
        description: 'WalletHistory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(WalletHistory)) where?: Where<WalletHistory>,
  ): Promise<Count> {
    return this.walletHistoryRepository.count(where);
  }

  @get('/wallet-histories', {
    responses: {
      '200': {
        description: 'Array of WalletHistory model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WalletHistory, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(WalletHistory)) filter?: Filter<WalletHistory>,
  ): Promise<WalletHistory[]> {
    return this.walletHistoryRepository.find(filter);
  }

  @patch('/wallet-histories', {
    responses: {
      '200': {
        description: 'WalletHistory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletHistory, {partial: true}),
        },
      },
    })
    walletHistory: WalletHistory,
    @param.query.object('where', getWhereSchemaFor(WalletHistory)) where?: Where<WalletHistory>,
  ): Promise<Count> {
    return this.walletHistoryRepository.updateAll(walletHistory, where);
  }

  @get('/wallet-histories/{id}', {
    responses: {
      '200': {
        description: 'WalletHistory model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WalletHistory, {includeRelations: true}),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(WalletHistory)) filter?: Filter<WalletHistory>
  ): Promise<WalletHistory> {
    return this.walletHistoryRepository.findById(id, filter);
  }

  @patch('/wallet-histories/{id}', {
    responses: {
      '204': {
        description: 'WalletHistory PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletHistory, {partial: true}),
        },
      },
    })
    walletHistory: WalletHistory,
  ): Promise<void> {
    await this.walletHistoryRepository.updateById(id, walletHistory);
  }

  @put('/wallet-histories/{id}', {
    responses: {
      '204': {
        description: 'WalletHistory PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() walletHistory: WalletHistory,
  ): Promise<void> {
    await this.walletHistoryRepository.replaceById(id, walletHistory);
  }

  @del('/wallet-histories/{id}', {
    responses: {
      '204': {
        description: 'WalletHistory DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.walletHistoryRepository.deleteById(id);
  }
}
