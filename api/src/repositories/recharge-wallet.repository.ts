import {DefaultCrudRepository} from '@loopback/repository';
import {RechargeWallet, RechargeWalletRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RechargeWalletRepository extends DefaultCrudRepository<
  RechargeWallet,
  typeof RechargeWallet.prototype.id,
  RechargeWalletRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RechargeWallet, dataSource);
  }
}
