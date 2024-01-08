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
import {Offers} from '../models';
import {OffersRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class OffersController {
  constructor(
    @repository(OffersRepository)
    public offersRepository : OffersRepository,
  ) {}

  @post('/offers', {
    responses: {
      '200': {
        description: 'Offers model instance',
        content: {'application/json': {schema: getModelSchemaRef(Offers)}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Offers, {
            title: 'NewOffers',
            exclude: ['id'],
          }),
        },
      },
    })
    offers: Omit<Offers, 'id'>,
  ): Promise<Offers> {
    return this.offersRepository.create(offers);
  }

  @get('/offers/count', {
    responses: {
      '200': {
        description: 'Offers model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(Offers)) where?: Where<Offers>,
  ): Promise<Count> {
    return this.offersRepository.count(where);
  }

  @get('/offers', {
    responses: {
      '200': {
        description: 'Array of Offers model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Offers, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Offers)) filter?: Filter<Offers>,
  ): Promise<Offers[]> {
    return this.offersRepository.find(filter);
  }

  @patch('/offers', {
    responses: {
      '200': {
        description: 'Offers PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Offers, {partial: true}),
        },
      },
    })
    offers: Offers,
    @param.query.object('where', getWhereSchemaFor(Offers)) where?: Where<Offers>,
  ): Promise<Count> {
    return this.offersRepository.updateAll(offers, where);
  }

  @get('/offers/{id}', {
    responses: {
      '200': {
        description: 'Offers model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Offers, {includeRelations: true}),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Offers)) filter?: Filter<Offers>
  ): Promise<Offers> {
    return this.offersRepository.findById(id, filter);
  }

  @patch('/offers/{id}', {
    responses: {
      '204': {
        description: 'Offers PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Offers, {partial: true}),
        },
      },
    })
    offers: Offers,
  ): Promise<void> {
    await this.offersRepository.updateById(id, offers);
  }

  @put('/offers/{id}', {
    responses: {
      '204': {
        description: 'Offers PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() offers: Offers,
  ): Promise<void> {
    await this.offersRepository.replaceById(id, offers);
  }

  @del('/offers/{id}', {
    responses: {
      '204': {
        description: 'Offers DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.offersRepository.deleteById(id);
  }
}
