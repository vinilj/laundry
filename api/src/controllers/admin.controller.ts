import { post, requestBody, getJsonSchemaRef, getModelSchemaRef } from "@loopback/rest";
import { User } from "../models";
import { validateCredentials } from "../services/validator";
import { PasswordHasherBindings, UserServiceBindings } from "../keys";
import { BcryptHasher } from "../services/hash.password.bcrypt";
import { inject } from "@loopback/core";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories";
import * as _ from 'lodash';
import { PermissionKeys } from "../authorization/permission-keys";
import { authenticate } from "@loopback/authentication";
import { notificationEmail } from '../services/email.service';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class AdminController {
  constructor(
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @post('/admin', {
    responses: {
      '200': {
        description: 'Admin',
        content: {
          schema: getJsonSchemaRef(User),
        },
      },
    },
  })
  // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
  async create(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, {
          title: 'NewUser',
          exclude: ['id', 'permissions', 'additionalProp1', 'UserType', 'mobile', 'stayIn', 'dob', 'lastActivityDate', 'status', 'franchiseId', 'deviceToken', 'userNotification'],
        }),
      },
    },
  })
  admin: User) {
    admin.password = "AM$JAN)%"
    validateCredentials(_.pick(admin, ['email', 'password']));
    admin.permissions = [
      PermissionKeys.SuperAdmin,
      // PermissionKeys.AccessAuthFeatures
    ]
    admin.userType = "superAdmin"
    let data: any={
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      mobile: admin.mobile,
    };
    admin.password = admin.password+Math.floor(1000 + Math.random() * 9000);
    admin.sendPassword = admin.password;
    let emailData:any = {
      email : admin.email,
      subject : "Account Information For New users",
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
          <h1>A Admin account has been created</h1>
          <hr>
      <h3>Login Details</h3>
          <p><strong>User name : </strong>`+ admin.email+`</p>
          <p><strong>Password : </strong>`+ admin.sendPassword+`</p>
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
    admin.status = true;
    delete admin.sendPassword;
    admin.password = await this.hasher.hashPassword(admin.password);
    const newAdmin = await this.userRepository.create(admin);
    notificationEmail(emailData);
    return newAdmin;
  }

}
