import {DefaultCrudRepository} from '@loopback/repository';
import {WalletHistory, WalletHistoryRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WalletHistoryRepository extends DefaultCrudRepository<
  WalletHistory,
  typeof WalletHistory.prototype.id,
  WalletHistoryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(WalletHistory, dataSource);
  }
}
