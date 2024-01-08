import { BindingKey } from '@loopback/core';
import { TokenService, UserService } from '@loopback/authentication';
import { Credentials } from './repositories/user.repository';
import { MobileLoginCredentials } from './repositories/otp.repository';
import { User, Otp } from './models';
import { PasswordHasher } from './services/hash.password.bcrypt';
import { MyOtpService } from './services/otp.service';
import { FileUploadHandler } from './types';


export namespace TokenServiceConstants {
  export const TOKEN_SECRET_VALUE = '138asda8213';
  export const TOKEN_EXPIRES_IN_VALUE = '48h';
}
export namespace TokenServiceBindings {
  export const TOKEN_SECRET = BindingKey.create<string>(
    'authentication.jwt.secret',
  );
  export const TOKEN_EXPIRES_IN = BindingKey.create<string>(
    'authentication.jwt.expiresIn',
  );
  export const TOKEN_SERVICE = BindingKey.create<TokenService>(
    'services.jwt.service',
  );
}

export namespace PasswordHasherBindings {
  export const PASSWORD_HASHER = BindingKey.create<PasswordHasher>(
    'services.hasher',
  );
  export const ROUNDS = BindingKey.create<number>('services.hasher.rounds');
}

export namespace UserServiceBindings {
  export const USER_SERVICE = BindingKey.create<UserService<Credentials, User>>(
    'services.user.service',
  );
}

export const FILE_UPLOAD_SERVICE = BindingKey.create<FileUploadHandler>(
  'services.FileUpload',
);

export const STORAGE_DIRECTORY = BindingKey.create<string>('storage.directory');

// export const EMAIL_CREDENTIALS =

export const EMAIL_CONFIG = {
  pool: true,
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  service: 'gmail',
  auth: {
    user: 'coinlaundryind@gmail.com', //enter email id
    pass: 'coin@1234' //enter password
  }

}

// export namespace OtpServiceBindings {
//   export const OTP_SERVICE = BindingKey.create<UserService<MobileLoginCredentials, Otp>>(
//     'services.otp.service',
//   );
// }
