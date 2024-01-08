import { UserService } from '@loopback/authentication';
import { UserProfile, securityId } from '@loopback/security';
import { MobileCredentials, OtpRepository, MobileLoginCredentials } from '../repositories/otp.repository';
import { User, Otp } from '../models';
import { repository } from '@loopback/repository';
import { HttpErrors } from '@loopback/rest';
import { inject } from '@loopback/core';
import { BcryptHasher } from './hash.password.bcrypt';
import { PasswordHasherBindings } from '../keys';

export class MyOtpService implements UserService<Otp, MobileLoginCredentials> {
  constructor(
    @repository(OtpRepository)
    public OtpRepository: OtpRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
  ) { }
  async verifyCredentials(MobileLoginCredentials: MobileLoginCredentials): Promise<Otp> {
    const User = await this.OtpRepository.findOne({
      where: {
        mobile: MobileLoginCredentials.mobile,
      },
    });
    if (!User) {
      throw new HttpErrors.NotFound(
        `user not found with this ${MobileLoginCredentials.mobile}`,
      );
    }
    return User;
  }
  convertToUserProfile(user: Otp): UserProfile {
    return { [securityId]: `${user.id}`, mobile: user.mobile }
  }
}
