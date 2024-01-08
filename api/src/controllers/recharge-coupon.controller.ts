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
import { RechargeWallet, User } from '../models';
import { RechargeWalletRepository, UserRepository } from '../repositories';
import { MobileCredentialsRequestBody, RechargeCouponSchemaRequestBody } from './specs/user.controller.spec';
import { SendSMS, orderStatusSMS } from '../services/sms.service';
import { inject } from '@loopback/core';
import { AuthenticationBindings, authenticate } from '@loopback/authentication';
import { UserProfile, securityId } from '@loopback/security';
import { PermissionKeys } from '../authorization/permission-keys';
import { updateWallet, updateRechargeTable } from '../services/wallet.service';
import { sendPushNotification } from '../services/sns.service';
import { sendMail } from '../services/email.service';




export class RechargeCouponController {
  constructor(
    @repository(RechargeWalletRepository)
    public rechargeWalletRepository: RechargeWalletRepository,
    @repository(UserRepository) public userRepository: UserRepository,
  ) { }


  @post('/recharge-wallets', {
    responses: {
      '200': {
        description: 'couponCode code',
        content: {
          'application/json': {
            schema: getJsonSchemaRef(RechargeWallet),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async couponValidation(@requestBody(RechargeCouponSchemaRequestBody)
  recharegeData: RechargeWallet,
    @inject(AuthenticationBindings.CURRENT_USER)
    currentUser: UserProfile
  ): Promise<any> {
    const Coupon = await this.rechargeWalletRepository.findOne({
      where: {
        couponCode: recharegeData.couponCode,
      },
    });
    
    if (!Coupon) {
      throw new HttpErrors.NotFound('Invalid coupon');
    }
    // var currDate = new Date(),
    //   currentDate = currDate.getTime();
    // let validDate: any = Coupon?.validTo;
    // const expireDate = validDate.getTime();
    if (Coupon.status) {
      throw new HttpErrors.NotAcceptable('Coupon already used');
    }
    updateWallet(currentUser.id, Coupon.coins);
    this.pushNotification(currentUser.id, Coupon.coins)
    updateRechargeTable(currentUser, Coupon.id);
    Coupon.body = "recharge";
    Coupon.userId = currentUser.id;
      sendMail(Coupon);
      orderStatusSMS(Coupon)
    return Promise.resolve({ code: 200, message: "recharge Successfull" });
  }

  async pushNotification(id:number, coins:number,
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>
  ): Promise<User> {
    let userData = await this.userRepository.findById(id, filter);
    let pushData={
      token:[userData.deviceToken],
      body:'Recharge Successfull! ' + coins + ' added to your wallet',
      head:'Recharge Status'
    }
    sendPushNotification(pushData)
    return userData
  }


  @get('/recharge-wallets/count', {
    responses: {
      '200': {
        description: 'RechargeWallet model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(RechargeWallet)) where?: Where<RechargeWallet>,
  ): Promise<Count> {
    return this.rechargeWalletRepository.count(where);
  }

  @get('/recharge-wallets', {
    responses: {
      '200': {
        description: 'Array of RechargeWallet model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RechargeWallet, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RechargeWallet)) filter?: Filter<RechargeWallet>,
  ): Promise<RechargeWallet[]> {
    return this.rechargeWalletRepository.find(filter);
  }

  @patch('/recharge-wallets', {
    responses: {
      '200': {
        description: 'RechargeWallet PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RechargeWallet, { partial: true }),
        },
      },
    })
    rechargeWallet: RechargeWallet,
    @param.query.object('where', getWhereSchemaFor(RechargeWallet)) where?: Where<RechargeWallet>,
  ): Promise<Count> {
    return this.rechargeWalletRepository.updateAll(rechargeWallet, where);
  }

  @get('/recharge-wallets/{id}', {
    responses: {
      '200': {
        description: 'RechargeWallet model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RechargeWallet, { includeRelations: true }),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(RechargeWallet)) filter?: Filter<RechargeWallet>
  ): Promise<RechargeWallet> {
    return this.rechargeWalletRepository.findById(id, filter);
  }

  @patch('/recharge-wallets/{id}', {
    responses: {
      '204': {
        description: 'RechargeWallet PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RechargeWallet, { partial: true }),
        },
      },
    })
    rechargeWallet: RechargeWallet,
  ): Promise<void> {
    await this.rechargeWalletRepository.updateById(id, rechargeWallet);
  }

  @put('/recharge-wallets/{id}', {
    responses: {
      '204': {
        description: 'RechargeWallet PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rechargeWallet: RechargeWallet,
  ): Promise<void> {
    await this.rechargeWalletRepository.replaceById(id, rechargeWallet);
  }

  @del('/recharge-wallets/{id}', {
    responses: {
      '204': {
        description: 'RechargeWallet DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rechargeWalletRepository.deleteById(id);
  }
}
