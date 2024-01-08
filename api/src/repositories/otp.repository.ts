import { DefaultCrudRepository } from '@loopback/repository';
import { Otp, OtpRelations } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export type MobileCredentials = {
  mobile: string;
};

export type MobileLoginCredentials = {
  mobile: string;
  otp: number;
  time: Date;
};

export type ResendMobileCredentials = {
  mobile: string;
};

export class OtpRepository extends DefaultCrudRepository<
  Otp,
  typeof Otp.prototype.id,
  OtpRelations
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Otp, dataSource);
  }
}
