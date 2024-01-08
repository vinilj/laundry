import { DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { Order, OrderRelations, Franchise, User, Wallet, InstaCoupons } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
import { WalletRepository } from './wallet.repository';
import { FranchiseRepository } from './franchise.repository';
import { InstaCouponsRepository } from './insta-coupons.repository';

export type orderCornJob = {
  orderStatus: string;
};

export type DashboardDetails = {
  startDate: String;
  endDate: String;
  franchise: string;
};

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {


  public readonly user: BelongsToAccessor<User, typeof Order.prototype.id>;

  public readonly franchise: BelongsToAccessor<Franchise, typeof Order.prototype.id>;


  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('FranchiseRepository') protected franchiseRepositoryGetter: Getter<FranchiseRepository>,
  ) {
    super(Order, dataSource);
    this.franchise = this.createBelongsToAccessorFor('franchise', franchiseRepositoryGetter,);
    this.registerInclusionResolver('franchise', this.franchise.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
