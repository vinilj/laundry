import {DefaultCrudRepository} from '@loopback/repository';
import {Gst, GstRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GstRepository extends DefaultCrudRepository<
  Gst,
  typeof Gst.prototype.id,
  GstRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Gst, dataSource);
  }
}
