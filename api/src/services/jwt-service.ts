import { UserProfile, securityId } from '@loopback/security';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';
import { inject } from '@loopback/core';
import { TokenServiceBindings } from '../keys';
const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify);

export class JWTService {
  @inject(TokenServiceBindings.TOKEN_SECRET)
  public readonly jwtSecret: string;
  @inject(TokenServiceBindings.TOKEN_EXPIRES_IN)
  public readonly jwtExpiresIn: string;

  async generateToken(userProfile: UserProfile): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized(
        'Error while generating token : userprofile is null',
      );
    }
    let token = '';
    try {
      token = await signAsync(userProfile, this.jwtSecret, {
        expiresIn: this.jwtExpiresIn,
      });
    } catch (err) {
      throw new HttpErrors.Unauthorized(`error generating token ${err}`);
    }
    return token;
  }
  async verifyToken(token: string): Promise<UserProfile> {
    if (!token) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token : 'token' is null`,
      );
    }
    let userProfile: UserProfile;
    try {
      const decryptedToken = await verifyAsync(token, this.jwtSecret);
      userProfile = Object.assign(
        { [securityId]: '', name: '', permissions: [] },
        {
          id: decryptedToken.id,
          name: decryptedToken.name,
          firstName: decryptedToken.firstName,
          lastName: decryptedToken.lastName,
          mobile: decryptedToken.mobile,
          email: decryptedToken.email,
          permissions: decryptedToken.permissions,
          dob: decryptedToken.dob,
          userType: decryptedToken.userType,
          deviceToken: decryptedToken.deviceToken
        },
      );
    } catch (error) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token : ${error.message}`,
      );
    }
    return userProfile;
  }


  async expireToken(token: any): Promise<string> {
    if (!token) {
      throw new HttpErrors.Unauthorized(
        'Error in logout : userprofile is null',
      );
    }
    try {
      const decryptedToken = await verifyAsync(token, this.jwtSecret);
      token = await signAsync(token, this.jwtSecret, {
        expiresIn: 1,
      });
      // jwt.sign(decryptedToken, this.jwtSecret, {expiresIn: '1'})
    } catch (err) {
      throw new HttpErrors.Unauthorized(`error generating token ${err}`);
    }
    return token;
  }
}
