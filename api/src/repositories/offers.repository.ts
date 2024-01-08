import {DefaultCrudRepository} from '@loopback/repository';
import {Offers, OffersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OffersRepository extends DefaultCrudRepository<
  Offers,
  typeof Offers.prototype.id,
  OffersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Offers, dataSource);
  }
}
