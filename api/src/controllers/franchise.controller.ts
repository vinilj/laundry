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
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';
import { Franchise, User } from '../models';
import { FranchiseRepository, UserRepository } from '../repositories';
import { notificationEmail } from '../services/email.service';
import { PasswordHasherBindings, UserServiceBindings, TokenServiceBindings } from '../keys';
import { inject } from '@loopback/core';
import { BcryptHasher } from '../services/hash.password.bcrypt';
import { addWalletUser } from '../services/wallet.service';
import { MyUserService } from '../services/user.service';

export class FranchiseController {
  constructor(
    @repository(FranchiseRepository)
    public franchiseRepository: FranchiseRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
  ) { }

  @post('/franchises', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Franchise) } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Franchise, {
            title: 'NewFranchise',
            exclude: ['id'],
          }),
        },
      },
    })
    franchise: Omit<Franchise, 'id'>,
  ): Promise<Franchise> {
    let data = this.franchiseRepository.create(franchise);
    let franchiseUser: any = {
      firstName: (await data).name,
      "lastName": " ",
      "email": (await data).email,
      // "password": " ",
      "mobile": (await data).mobile,
      "franchiseId": (await data).id,
    };
    franchiseUser.password = 'Laundry' + Math.floor(1000 + Math.random() * 9000);
    let franchiseReturnData = this.franchiseSignup(franchiseUser);
    let emailData: any = {
      email: (await data).email,
      subject: "Account Information For New users",
      body: `<html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        <style media="screen">
          *{
            font-family: 'Roboto', sans-serif;
          }

        </style>
      </head>
      <body style="width:100%; font-family: 'Roboto', sans-serif;">
        <div class="emailbody" style="width:50%; margin: 1em auto; border: 5px solid #ededed; font-family: 'Roboto', sans-serif; padding: 1em;">
          <h1>A Franchise account has been created</h1>
          <hr>
          <h3>Franchise Details</h3>
          <table>
            <tr>
              <td>Franchise Name : </td>
              <td>`+ (await data).name + `</td>
            </tr>
            <tr>
              <td>Franchise Email : </td>
              <td>`+ (await data).email + `</td>
            </tr>
            <tr>
              <td>Franchise Mobile : </td>
              <td>`+ (await data).mobile + `</td>
            </tr>
            <tr>
              <td>Franchise address : </td>
              <td>`+ (await data).address + `</td>
            </tr>
          </table>
      <hr>
      <h3>Login Details</h3>
          <p><strong>User name : </strong>`+ franchiseUser.email + `</p>
          <p><strong>Password : </strong>`+ franchiseUser.password + `</p>
          <hr>
          <div style="margin:2em 0;">
            <p>Here's what to do next:</p>
            <ul>
              <li>Once you've signed in with temporary password, then you can create your own password by using following the instructions.</li>
              <ul>
                <li>Go to top navigation</li>
                <li>click on your Franchise/user name</li>
                <li>select change password option</li>
                <li>update your password</li>
              </ul>
            </ul>
          </div>
          <hr>
          <div>
            <p style="margin: 0; padding:0; line-height:0.8em;"><small>This email was sent from an unmonitored mailbox.</small></p>
            <p style="margin: 0; padding:0; line-height:0.8em;"><small>You are receiving this email because you have subscribed to WashBy.</small></p>
          </div>
        </div>
      </body>
    </html>`
    }
    notificationEmail(emailData);
    return data;
  }

  async franchiseSignup(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, {
          title: 'NewUser',
          exclude: ['id', 'permissions', 'additionalProp1'],
        }),
      },
    },
  })
  userData: User) {

    userData.userType = "FranchiseAdmin";
    userData.permissions = [PermissionKeys.FranchiseAdmin]
    userData.password = await this.hasher.hashPassword(userData.password)
    const newUser = await this.userRepository.create(userData);
    delete newUser.password;
    return newUser;
  }

  @get('/franchises/count', {
    responses: {
      '200': {
        description: 'Franchise model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async count(
    @param.query.object('where', getWhereSchemaFor(Franchise)) where?: Where<Franchise>,
  ): Promise<Count> {
    return this.franchiseRepository.count(where);
  }

  @get('/franchises', {
    responses: {
      '200': {
        description: 'Array of Franchise model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Franchise, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Franchise)) filter?: Filter<Franchise>,
  ): Promise<Franchise[]> {
    return this.franchiseRepository.find(filter);
  }

  @patch('/franchises', {
    responses: {
      '200': {
        description: 'Franchise PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Franchise, { partial: true }),
        },
      },
    })
    franchise: Franchise,
    @param.query.object('where', getWhereSchemaFor(Franchise)) where?: Where<Franchise>,
  ): Promise<Count> {
    return this.franchiseRepository.updateAll(franchise, where);
  }

  @get('/franchises/{id}', {
    responses: {
      '200': {
        description: 'Franchise model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Franchise, { includeRelations: true }),
          },
        },
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Franchise)) filter?: Filter<Franchise>
  ): Promise<Franchise> {
    return this.franchiseRepository.findById(id, filter);
  }

  @patch('/franchises/{id}', {
    responses: {
      '204': {
        description: 'Franchise PATCH success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Franchise, { partial: true }),
        },
      },
    })
    franchise: Franchise,
  ): Promise<void> {
    await this.franchiseRepository.updateById(id, franchise);
  }

  @put('/franchises/{id}', {
    responses: {
      '204': {
        description: 'Franchise PUT success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() franchise: Franchise,
  ): Promise<void> {
    await this.franchiseRepository.replaceById(id, franchise);
  }

  @del('/franchises/{id}', {
    responses: {
      '204': {
        description: 'Franchise DELETE success',
      },
    },
  })
  @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.franchiseRepository.deleteById(id);
  }
}
