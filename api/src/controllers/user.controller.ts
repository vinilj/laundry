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
  HttpHandler,
} from '@loopback/rest';
import { User, Otp, Wallet } from '../models';
import { UserRepository, Credentials, MobileCredentials, OtpRepository, MobileLoginCredentials, ResendMobileCredentials, WalletRepository, forgotPasswordCredentials} from '../repositories';
import { validateCredentials } from '../services/validator';
import * as _ from 'lodash';
import { inject } from '@loopback/core';
import { UserProfile, securityId } from '@loopback/security';
import { BcryptHasher } from '../services/hash.password.bcrypt';
import { CredentialsRequestBody, MobileCredentialsRequestBody, MobileLoginCredentialsRequestBody, ResendMobileLoginCredentialsRequestBody, forgotpasswordCredentialsRequestBody } from './specs/user.controller.spec';
import { MyUserService } from '../services/user.service';
import { MyOtpService } from '../services/otp.service';
import { JWTService } from '../services/jwt-service';
import { PasswordHasherBindings, UserServiceBindings, TokenServiceBindings } from '../keys';
import { authenticate, AuthenticationBindings } from '@loopback/authentication';
import { PermissionKeys } from '../authorization/permission-keys';
import {SendSMS} from '../services/sms.service';
import {JWTStrategy} from '../authentication-stategies/jwt-strategy'
import {Request, HttpErrors} from '@loopback/rest';
import {addWalletUser} from '../services/wallet.service';
import { Http2ServerResponse } from 'http2';
import { notificationEmail } from '../services/email.service';


export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(OtpRepository)
    public OtpRepository: OtpRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(UserServiceBindings.USER_SERVICE)
    public otpService: MyOtpService,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: JWTService,
  ) { }


  // @post('/users/signup', {
  //   responses: {
  //     '200': {
  //       description: 'User',
  //       content: {
  //         schema: getJsonSchemaRef(User),
  //       },
  //     },
  //   },
  // })
  // @authenticate('jwt')
  // async signup(@requestBody({
  //   content: {
  //     'application/json': {
  //       schema: getModelSchemaRef(User, {
  //         title: 'NewUser',
  //         exclude: ['id', 'permissions', 'additionalProp1'],
  //       }),
  //     },
  //   },
  // })
  // userData: User) {
  //   // validateCredentials(_.pick(userData, ['email', 'password']));
  //   userData.userType = "FranchiseAdmin";
  //   userData.permissions = [PermissionKeys.FranchiseAdmin]
  //   userData.password = = 'Laundry'+Math.floor(1000 + Math.random() * 9000);
  //   userData.password = await this.hasher.hashPassword(userData.password)
  //   const newUser = await this.userRepository.create(userData);
  //   addWalletUser(newUser);
  //   delete newUser.password;
  //   return newUser;
  // }


  // @patch('/updatepassword/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'User PATCH success',
  //     },
  //   },
  // })
  // @authenticate('jwt')
  // async updatepassword(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(User, {partial: true}),
  //       },
  //     },
  //   })
  //   user: User,
  //   @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>,
  //   // @inject(AuthenticationBindings.CURRENT_USER)
  //   // currentUser: UserProfile
  // ): Promise<any> {
  //   await this.userRepository.updateById(id, user);
  //   return this.userRepository.findById(id, filter);
  // }


  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(@requestBody(CredentialsRequestBody) credentials: Credentials): Promise<{ token: string }> {
    const user = await this.userService.verifyCredentials(credentials);
    const userProfile = this.userService.convertToUserProfile(user);
    userProfile.permissions = user.permissions;
    const jwt = await this.jwtService.generateToken(userProfile);
    return Promise.resolve({ token: jwt });
  }


  @post('/users/forgotpassword', {
    responses: {
      '200': {
        description: 'forgot password',
        content: {
          'application/json': {
          },
        },
      },
    },
  })
  async forgotPassword(@requestBody(forgotpasswordCredentialsRequestBody) credentials: forgotPasswordCredentials): Promise<any>   {
    const user = await this.userService.verifyforgotCredentials(credentials);
    if(user.userType==='FranchiseAdmin' || user.userType==='superAdmin'){
    user.password =  'Laundry'+Math.floor(1000 + Math.random() * 9000);
    let sendPassword = user.password;
    user.password = await this.hasher.hashPassword(user.password)
    await this.userRepository.updateById(user.id, user);
    user.sendPassword = sendPassword;
    let emailData:any = {
      email : user.email,
      subject : "Password reset requested for your Coin Laundry Account",
      body:`<html lang="en" dir="ltr">
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
          <h1>Your account password has been reset</h1>
          <hr>
          <p>Use following credentials for your login</p>
          <h3>Login Details</h3>
          <p><strong>User name : </strong> `+user.email+`</p>
          <p><strong>Password : </strong> `+user.sendPassword+`</p>
    
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
    return Promise.resolve({ code: 200, message: "Password sent to Registred mail" });
  }else{
    throw new HttpErrors.NotAcceptable('user doen\'t have permission');
  }
  }


  @post('/mobile/signup', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: getJsonSchemaRef(Otp),
          },
        },
      },
    },
  })
  async usersignup(@requestBody(MobileCredentialsRequestBody)
  userData: Otp) {
    const User = await this.OtpRepository.findOne({
      where: {
        mobile: userData.mobile,
      },
    });
    if(User){
      this.deleteOTP(User.id!)
    }
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    userData.otp = generatedOTP;
    let date: Date = new Date();
    userData.time = date;
    const newUser = await this.OtpRepository.create(userData);
    SendSMS(userData);
    delete newUser.otp;
    return newUser;
  }

  @post('/mobile/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async mobileLogin(@requestBody(MobileLoginCredentialsRequestBody) MobileLoginCredentials: MobileLoginCredentials): Promise<{ token: string }> {
    const User = await this.OtpRepository.findOne({
      where: {
        mobile: MobileLoginCredentials.mobile,
      },
    });
    var jwt: any;
    var message:any;
    var userType: string;
    let dbTime = User?.time.getTime();
    let storedDate: number = dbTime!;
    var currentDate = new Date().getTime();
    var expireTime = storedDate + 600000;
    if(MobileLoginCredentials.otp === User?.otp){
      if (expireTime >= currentDate && MobileLoginCredentials.otp === User?.otp) {  //checks the Timestamp
        var user = User!;
        const UserData = await this.userRepository.findOne({
          where: {
            mobile: MobileLoginCredentials.mobile,
          },
        });
        if (UserData) {  //user found
          const userProfile = this.userService.convertToUserProfile(UserData);
          jwt = await this.jwtService.generateToken(userProfile);
          userType = "found";
          message="OTP Valid";
          if(jwt){
                this.deleteOTP(User.id!)
          }
        }
        else {  // User Not Found
          userType = "notfound"; 
          message="User Not found";
          // throw new HttpErrors.NotFound('User Not Found');
        }
      }
      else {
        // jwt = null;
        // message="OTP Expired";
        throw new HttpErrors.Unauthorized('OTP Expired');
      }
    }
    else{
      // message="In-valid OTP";
      throw new HttpErrors.NotAcceptable('In-valid OTP');
    }
    return Promise.resolve({ token: jwt!, userType: userType!, message: message, status:200});
  }

  async deleteOTP(@param.path.number('id') id: number): Promise<void> {
    await this.OtpRepository.deleteById(id);
  }

  @post('/mobile/createUser', {
    responses: {
      '200': {
        description: 'User',
        content: {
          schema: getJsonSchemaRef(User),
        },
      },
    },
  })
  async createUser(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, {
          title: 'NewUser',
          exclude: ['id', 'password', 'permissions', 'additionalProp1'],
        }),
      },
    },
  })
  userData: User) {
    userData.userType = "user";
    userData.pushSubsciption = true;
    userData.smsSubsciption = true;
    userData.emailSubsciption=true;
    userData.permissions = [PermissionKeys.AccessAuthFeatures]
    userData.password = "5tHv-kn-czTPrQMK5dv9$";
    userData.status=true;
    userData.password = await this.hasher.hashPassword(userData.password)
    const newUser = await this.userRepository.create(userData);
    delete newUser.password;
    const UserOtp = await this.OtpRepository.findOne({
      where: {
        mobile: userData.mobile,
      },
    });
    if(UserOtp){
      this.deleteOTP(UserOtp.id!)
    }
    if (newUser) {
      const userProfile = this.userService.convertToUserProfile(newUser);
      const jwt = await this.jwtService.generateToken(userProfile);
      addWalletUser(newUser);
      return Promise.resolve({ token: jwt, message:"user Created Successfully" });
    }
  }

  @post('/resendOtp', {
    responses: {
      '200': {
        description: 'User',
        content: {
          schema: getJsonSchemaRef(Otp),
        },
      },
    },
  })
  async resendOtp(@requestBody(ResendMobileLoginCredentialsRequestBody) ResendMobileCredentials: ResendMobileCredentials): Promise<{ User: any }> {
    const User = await this.OtpRepository.findOne({
      where: {
        mobile: ResendMobileCredentials.mobile,
      },
    });
    let dbTime = User?.time.getTime();
    let storedDate: number = dbTime!;
    var currentDate = new Date().getTime();
    var expireTime = storedDate + 600000;
    if(User){
      if (expireTime >= currentDate) {
        SendSMS(User);
        return Promise.resolve({ User: User.mobile, message:"sent successfully", status:200 });
      }
      else{
        throw new HttpErrors.Unauthorized('OTP Expired');
        // return Promise.resolve({User: "User", message:"OTP Expired", status:403});
      }
    }
    else{
      throw new HttpErrors.Unauthorized('User Not found');
      // return Promise.resolve({User: "User", message:"OTP not generated", status:404});
    }
    
  }

  @get('/logout')
  @authenticate('jwt')
  async logout(){}
  

  @get('/users/me')
  @authenticate('jwt')
  async me(
    @inject(AuthenticationBindings.CURRENT_USER)
    currentUser: UserProfile
  ): Promise<UserProfile> {
    return Promise.resolve(currentUser);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  @authenticate('jwt')
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,@inject(AuthenticationBindings.CURRENT_USER)
    currentUser: UserProfile,
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>,
  ): Promise<any> {
    if(user.password){
        user.password = await this.hasher.hashPassword(user.password);
        let emailData:any = {
          email : currentUser.email,
          subject : "Your password has been Changed",
          body:`<html lang="en" dir="ltr">
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
              <p>Dear ` +currentUser.firstName+`</p>
              <p>The password for your account (`+currentUser.email+`) has been successfully changed.</p>
              <p style="margin-top:2em">Sincerely,</p>
              <p>WashBy</p>
              <hr>
              <div>
                <p style="margin: 0; padding:0; line-height:0.8em;"><small>This email was sent from an unmonitored mailbox.</small></p>
                <p style="margin: 0; padding:0; line-height:0.8em;"><small>You are receiving this email because you have subscribed to WashBy.</small></p>
              </div>
            </div>
          </body>
        </html>`
        }
        notificationEmail(emailData)
      }
    await this.userRepository.updateById(id, user);
    let userprofile = this.userRepository.findById(id, filter);
    delete (await userprofile).password
    return userprofile
  }

  @post('/storeoperator', {
    responses: {
      '200': {
        description: 'User',
        content: {
          schema: getJsonSchemaRef(User),
        },
      },
    },
  })
  @authenticate('jwt')
  async storeoperator(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, {
          title: 'NewUser',
          exclude: ['id', 'permissions', 'additionalProp1','deviceToken', 'status', 'lastActivityDate', 'dob', 'userType', 'stayIn', 'password'],
        }),
      },
    },
  })
  userData: User) {
    // validateCredentials(_.pick(userData, ['email', 'password']));
    userData.userType = "storeoperator";
    userData.status = true;
    userData.permissions = [PermissionKeys.storeoperator]
    const password= "Coinlaundry@123";
    userData.password = await this.hasher.hashPassword(password)
    const newUser = await this.userRepository.create(userData);
    delete newUser.password;
    return newUser;
  }


  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User, { includeRelations: true }),
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }


  @get('/getStoreOperator', {
    responses: {
      '200': {
        description: 'Array of Order model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(User, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async getOrdersByDate(
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>,
  ): Promise<any> {
    return this.userRepository.find({
      where:{userType:"storeoperator"}
    });
  }

}
