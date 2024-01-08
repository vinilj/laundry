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
import {Wallet} from '../models';
import {WalletRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class WalletController {
  constructor(
    @repository(WalletRepository)
    public walletRepository : WalletRepository,
  ) {}

  @post('/wallets', {
    responses: {
      '200': {
        description: 'Wallet model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wallet)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wallet, {
            title: 'NewWallet',
            exclude: ['id'],
          }),
        },
      },
    })
    wallet: Omit<Wallet, 'id'>,
  ): Promise<Wallet> {
    return this.walletRepository.create(wallet);
  }

  @get('/wallets/count', {
    responses: {
      '200': {
        description: 'Wallet model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(Wallet)) where?: Where<Wallet>,
  ): Promise<Count> {
    return this.walletRepository.count(where);
  }

  @get('/wallets', {
    responses: {
      '200': {
        description: 'Array of Wallet model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Wallet, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Wallet)) filter?: Filter<Wallet>,
  ): Promise<Wallet[]> {
    return this.walletRepository.find(filter);
  }

  @patch('/wallets', {
    responses: {
      '200': {
        description: 'Wallet PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wallet, {partial: true}),
        },
      },
    })
    wallet: Wallet,
    @param.query.object('where', getWhereSchemaFor(Wallet)) where?: Where<Wallet>,
  ): Promise<Count> {
    return this.walletRepository.updateAll(wallet, where);
  }

  @get('/wallets/{id}', {
    responses: {
      '200': {
        description: 'Wallet model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Wallet, {includeRelations: true}),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Wallet)) filter?: Filter<Wallet>
  ): Promise<Wallet> {
    return this.walletRepository.findById(id, filter);
  }

  @patch('/wallets/{id}', {
    responses: {
      '204': {
        description: 'Wallet PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wallet, {partial: true}),
        },
      },
    })
    wallet: Wallet,
  ): Promise<void> {
    await this.walletRepository.updateById(id, wallet);
  }

  @put('/wallets/{id}', {
    responses: {
      '204': {
        description: 'Wallet PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() wallet: Wallet,
  ): Promise<void> {
    await this.walletRepository.replaceById(id, wallet);
  }

  @del('/wallets/{id}', {
    responses: {
      '204': {
        description: 'Wallet DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.walletRepository.deleteById(id);
  }
}
