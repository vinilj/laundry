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
  InstaCoupons,
} from '../models';
import { FranchiseRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';

export class FranchiseInstaCouponsController {
  constructor(
    @repository(FranchiseRepository) protected franchiseRepository: FranchiseRepository,
  ) { }

  @get('/franchises/{id}/insta-coupons', {
    responses: {
      '200': {
        description: 'Array of InstaCoupons\'s belonging to Franchise',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(InstaCoupons) },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<InstaCoupons>,
  ): Promise<InstaCoupons[]> {
    return this.franchiseRepository.instaCoupons(id).find(filter);
  }

  @post('/franchises/{id}/insta-coupons', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: { 'application/json': { schema: getModelSchemaRef(InstaCoupons) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @param.path.number('id') id: typeof Franchise.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstaCoupons, {
            title: 'NewInstaCouponsInFranchise',
            exclude: ['id'],
            optional: ['franchiseId']
          }),
        },
      },
    }) instaCoupons: Omit<InstaCoupons, 'id'>,
  ): Promise<InstaCoupons> {
    return this.franchiseRepository.instaCoupons(id).create(instaCoupons);
  }




  // @post('/recharge-wallets', {
  //   responses: {
  //     '200': {
  //       description: 'couponCode code',
  //       content: {
  //         'application/json': {
  //           schema: getJsonSchemaRef(RechargeWallet),
  //         },
  //       },
  //     },
  //   },
  // })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  // async couponValidation(@requestBody(RechargeCouponSchemaRequestBody)
  // recharegeData: RechargeWallet,
  // @inject(AuthenticationBindings.CURRENT_USER)
  // currentUser: UserProfile
  // ): Promise<any> {
  //   const Coupon = await this.rechargeWalletRepository.findOne({
  //     where: {
  //       couponCode: recharegeData.couponCode,
  //     },
  //   });
  //   if(!Coupon){
  //     throw new HttpErrors.NotFound('Invalid coupon');
  //   }
  //   var currDate = new Date(),
  //   currentDate = currDate.getTime();
  //   let validDate:any = Coupon?.validTo;
  //   const expireDate = validDate.getTime();
  //   if(currentDate>expireDate){
  //     throw new HttpErrors.NotAcceptable('Coupon Expired');
  //   }
  //   updateWallet(currentUser.id, Coupon.coins);
  //   return Coupon;
  // }

  @patch('/franchises/{id}/insta-coupons', {
    responses: {
      '200': {
        description: 'Franchise.InstaCoupons PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstaCoupons, { partial: true }),
        },
      },
    })
    instaCoupons: Partial<InstaCoupons>,
    @param.query.object('where', getWhereSchemaFor(InstaCoupons)) where?: Where<InstaCoupons>,
  ): Promise<Count> {
    return this.franchiseRepository.instaCoupons(id).patch(instaCoupons, where);
  }

  @del('/franchises/{id}/insta-coupons', {
    responses: {
      '200': {
        description: 'Franchise.InstaCoupons DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(InstaCoupons)) where?: Where<InstaCoupons>,
  ): Promise<Count> {
    return this.franchiseRepository.instaCoupons(id).delete(where);
  }
}
