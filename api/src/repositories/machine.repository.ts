import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Machine, MachineRelations, Order, Franchise} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderRepository} from './order.repository';
import {FranchiseRepository} from './franchise.repository';

export class MachineRepository extends DefaultCrudRepository<
  Machine,
  typeof Machine.prototype.id,
  MachineRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof Machine.prototype.id>;

  public readonly franchise: BelongsToAccessor<Franchise, typeof Machine.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>, @repository.getter('FranchiseRepository') protected franchiseRepositoryGetter: Getter<FranchiseRepository>,
  ) {
    super(Machine, dataSource);
    this.franchise = this.createBelongsToAccessorFor('franchise', franchiseRepositoryGetter,);
    this.registerInclusionResolver('franchise', this.franchise.inclusionResolver);

    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
