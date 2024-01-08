import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Gst} from '../models';
import {GstRepository} from '../repositories';

export class GstController {
  constructor(
    @repository(GstRepository)
    public gstRepository : GstRepository,
  ) {}

  // @post('/gsts', {
  //   responses: {
  //     '200': {
  //       description: 'Gst model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(Gst)}},
  //     },
  //   },
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Gst, {
  //           title: 'NewGst',
  //           exclude: ['id'],
  //         }),
  //       },
  //     },
  //   })
  //   gst: Omit<Gst, 'id'>,
  // ): Promise<Gst> {
  //   return this.gstRepository.create(gst);
  // }

  // @get('/gsts/count', {
  //   responses: {
  //     '200': {
  //       description: 'Gst model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async count(
  //   @param.where(Gst) where?: Where<Gst>,
  // ): Promise<Count> {
  //   return this.gstRepository.count(where);
  // }

  // @get('/gsts', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Gst model instances',
  //       content: {
  //         'application/json': {
  //           schema: {
  //             type: 'array',
  //             items: getModelSchemaRef(Gst, {includeRelations: true}),
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(Gst) filter?: Filter<Gst>,
  // ): Promise<Gst[]> {
  //   return this.gstRepository.find(filter);
  // }

  // @patch('/GSTValue', {
  //   responses: {
  //     '200': {
  //       description: 'Gst PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Gst, {partial: true}),
  //       },
  //     },
  //   })
  //   gst: Gst,
  //   @param.where(Gst) where?: Where<Gst>,
  // ): Promise<Count> {
  //   return this.gstRepository.updateAll(gst, where);
  // }

  @get('/GSTValue/{id}', {
    responses: {
      '200': {
        description: 'Gst model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Gst, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Gst, {exclude: 'where'}) filter?: FilterExcludingWhere<Gst>
  ): Promise<Gst> {
    return this.gstRepository.findById(id, filter);
  }

  @patch('/GSTValue/{id}', {
    responses: {
      '204': {
        description: 'Gst PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gst, {partial: true}),
        },
      },
    })
    gst: Gst,
  ): Promise<void> {
    await this.gstRepository.updateById(id, gst);
  }

  // @put('/gsts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Gst PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() gst: Gst,
  // ): Promise<void> {
  //   await this.gstRepository.replaceById(id, gst);
  // }

  // @del('/gsts/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Gst DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.gstRepository.deleteById(id);
  // }
}
