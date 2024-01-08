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
  getJsonSchemaRef,
  HttpErrors,
} from '@loopback/rest';
import { InstaCoupons } from '../models';
import { InstaCouponsRepository } from '../repositories';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';
import { InstaCouponSchemaRequestBody } from './specs/user.controller.spec';
import { inject } from '@loopback/core';

export class InstaCouponsController {
  constructor(
    @repository(InstaCouponsRepository)
    public instaCouponsRepository: InstaCouponsRepository,
  ) { }

  @post('/promocode', {
    responses: {
      '200': {
        description: 'Promotional Code',
        content: {
          'application/json': {
            schema: getJsonSchemaRef(InstaCoupons),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async InstacouponValidation(@requestBody(InstaCouponSchemaRequestBody)
  couponData: InstaCoupons,
    // @inject(AuthenticationBindings.CURRENT_USER)
    // currentUser: UserProfile
  ): Promise<any> {
    const Coupon = await this.instaCouponsRepository.findOne({
      where: {
        coupon: couponData.coupon,
      },
    });
    if (!Coupon) {
      throw new HttpErrors.NotFound('Invalid coupon');
    }
    var currDate = new Date(),
    currentDate = currDate.getTime();
    let validDate: any = Coupon?.toDate;
    const expireDate = validDate.getTime();
    let sDate:any = Coupon?.fromDate;
    const startDate = sDate.getTime();
    if (currentDate < startDate) {
      throw new HttpErrors.NotAcceptable('Invalid coupon');
    }
    if (currentDate > expireDate) {
      throw new HttpErrors.NotAcceptable('Coupon Expired');
    }
    if (couponData.franchiseId !== Coupon.franchiseId) {
      throw new HttpErrors.NotAcceptable('This Promotional Offer is not Avail in this store');
    }
    return Coupon;
  }


  @post('/insta-coupons', {
    responses: {
      '200': {
        description: 'InstaCoupons model instance',
        content: { 'application/json': { schema: getModelSchemaRef(InstaCoupons) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstaCoupons, {
            title: 'NewInstaCoupons',
            exclude: ['id'],
          }),
        },
      },
    })
    instaCoupons: Omit<InstaCoupons, 'id'>,
  ): Promise<InstaCoupons> {
    return this.instaCouponsRepository.create(instaCoupons);
  }

  @get('/insta-coupons/count', {
    responses: {
      '200': {
        description: 'InstaCoupons model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(InstaCoupons)) where?: Where<InstaCoupons>,
  ): Promise<Count> {
    return this.instaCouponsRepository.count(where);
  }

  @get('/insta-coupons', {
    responses: {
      '200': {
        description: 'Array of InstaCoupons model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(InstaCoupons, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(InstaCoupons)) filter?: Filter<InstaCoupons>,
  ): Promise<InstaCoupons[]> {
    return this.instaCouponsRepository.find({
      include: [
        {
          relation: 'franchise',
        },
      ],
    });
  }

  @patch('/insta-coupons', {
    responses: {
      '200': {
        description: 'InstaCoupons PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstaCoupons, { partial: true }),
        },
      },
    })
    instaCoupons: InstaCoupons,
    @param.query.object('where', getWhereSchemaFor(InstaCoupons)) where?: Where<InstaCoupons>,
  ): Promise<Count> {
    return this.instaCouponsRepository.updateAll(instaCoupons, where);
  }

  @get('/insta-coupons/{id}', {
    responses: {
      '200': {
        description: 'InstaCoupons model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InstaCoupons, { includeRelations: true }),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(InstaCoupons)) filter?: Filter<InstaCoupons>
  ): Promise<InstaCoupons> {
    return this.instaCouponsRepository.findById(id, filter);
  }

  @patch('/insta-coupons/{id}', {
    responses: {
      '204': {
        description: 'InstaCoupons PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstaCoupons, { partial: true }),
        },
      },
    })
    instaCoupons: InstaCoupons,
  ): Promise<void> {
    await this.instaCouponsRepository.updateById(id, instaCoupons);
  }

  @put('/insta-coupons/{id}', {
    responses: {
      '204': {
        description: 'InstaCoupons PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() instaCoupons: InstaCoupons,
  ): Promise<void> {
    await this.instaCouponsRepository.replaceById(id, instaCoupons);
  }

  @del('/insta-coupons/{id}', {
    responses: {
      '204': {
        description: 'InstaCoupons DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.instaCouponsRepository.deleteById(id);
  }
}
