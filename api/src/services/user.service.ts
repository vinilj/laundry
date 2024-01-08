import { UserService } from '@loopback/authentication';
import { UserProfile, securityId } from '@loopback/security';
import { Credentials, UserRepository, forgotPasswordCredentials } from '../repositories/user.repository';
import { User } from '../models';
import { repository } from '@loopback/repository';
import { HttpErrors } from '@loopback/rest';
import { inject } from '@loopback/core';
import { BcryptHasher } from './hash.password.bcrypt';
import { PasswordHasherBindings } from '../keys';
import config from '../datasources/mysql.datasource.config.json';

var mysql = require('mysql');
const cron = require('node-cron')
var userData: any;
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

export class MyUserService implements UserService<User, Credentials> {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
  ) { }
  async verifyCredentials(credentials: Credentials): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where: {
        email: credentials.email,
      },
    });
    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `user not found with this ${credentials.email}`,
      );
    }

    const passwordMatched = await this.hasher.comparePassword(
      credentials.password,
      foundUser.password,
    );
    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('user name/password is wrong');
    }
    return foundUser;
  }

  async verifyforgotCredentials(credentials: forgotPasswordCredentials): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where: {
        email: credentials.email,
      },
    });
    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `user not found with this ${credentials.email}`,
      );
    }

    // const passwordMatched = await this.hasher.comparePassword(
    //   credentials.password,
    //   foundUser.password,
    // );
    // if (!passwordMatched) {
    //   throw new HttpErrors.Unauthorized('user name/password is wrong');
    // }
    return foundUser;
  }

  convertToUserProfile(user: User): UserProfile {
    let userName = '';
    if (user.firstName) {
      userName = user.firstName;
    }
    if (user.lastName) {
      userName = user.firstName
        ? `${user.firstName} ${user.lastName}`
        : user.lastName;
    }
    return { [securityId]: `${user.id}`, name: userName, id: user.id, firstName: user.firstName, lastName: user.lastName, mobile: user.mobile, email: user.email, permissions: user.permissions, dob: user.dob, userType: user.userType, deviceToken: user.deviceToken }
  }
}

con.connect(function (err: any) {

    cron.schedule('*/60 * * * *', async () => {  //for month replace with ***
        if (err) throw err;
        con.query("SELECT * FROM `User` where status = '1'", function (err: any, result: any, fields: any) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++) {
              userData = result[i];
                let dateTime = new Date(result[i].lastActivityDate);
                let expTime = dateTime.getTime()+15787899000;//15768099000
                var currDate = new Date(),
                    CurrentDate = currDate.getTime();
                if (expTime <= CurrentDate && result[i].userType=='user') {
                    dataupdate(JSON.parse(JSON.stringify(userData)));
                }
            }
        });

        function dataupdate(data: any) {
            con.query("Update `User` SET status='0' WHERE (status='1' AND userType='user') AND id='" + data.id + "'", function (err: any, result: any, fields: any) {
                if (err) throw err;
            })
        }

        //Truncate the Otp table for every 24 hours
        // con.query("TRUNCATE TABLE `Otp`", function (err: any, result: any, fields: any) {
        //   if (err) throw err;
        // })

    });
})
