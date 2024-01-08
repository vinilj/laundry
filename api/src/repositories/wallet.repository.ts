import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Wallet, WalletRelations, User} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class WalletRepository extends DefaultCrudRepository<
  Wallet,
  typeof Wallet.prototype.id,
  WalletRelations
> {


  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Wallet, dataSource);
  }
}
