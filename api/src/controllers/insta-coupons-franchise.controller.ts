import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  InstaCoupons,
  Franchise,
} from '../models';
import {InstaCouponsRepository} from '../repositories';

export class InstaCouponsFranchiseController {
  constructor(
    @repository(InstaCouponsRepository)
    public instaCouponsRepository: InstaCouponsRepository,
  ) { }

  @get('/insta-coupons/{id}/franchise', {
    responses: {
      '200': {
        description: 'Franchise belonging to InstaCoupons',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Franchise)},
          },
        },
      },
    },
  })
  async getFranchise(
    @param.path.number('id') id: typeof InstaCoupons.prototype.id,
  ): Promise<Franchise> {
    return this.instaCouponsRepository.franchise(id);
  }
}
