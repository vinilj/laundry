import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {InstaCoupons, InstaCouponsRelations, Franchise} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {FranchiseRepository} from './franchise.repository';

export class InstaCouponsRepository extends DefaultCrudRepository<
  InstaCoupons,
  typeof InstaCoupons.prototype.id,
  InstaCouponsRelations
> {

  public readonly franchise: BelongsToAccessor<Franchise, typeof InstaCoupons.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('FranchiseRepository') protected franchiseRepositoryGetter: Getter<FranchiseRepository>,
  ) {
    super(InstaCoupons, dataSource);
    this.franchise = this.createBelongsToAccessorFor('franchise', franchiseRepositoryGetter,);
    this.registerInclusionResolver('franchise', this.franchise.inclusionResolver);
  }
}
