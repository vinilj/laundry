import { DefaultCrudRepository, repository, HasManyRepositoryFactory } from '@loopback/repository';
import { Franchise, FranchiseRelations, Machine, Order, User, InstaCoupons} from '../models';
import { MysqlDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import {MachineRepository} from './machine.repository';
import {OrderRepository} from './order.repository';
import {UserRepository} from './user.repository';
import {InstaCouponsRepository} from './insta-coupons.repository';

export class FranchiseRepository extends DefaultCrudRepository<
  Franchise,
  typeof Franchise.prototype.id,
  FranchiseRelations
  > {

  public readonly machines: HasManyRepositoryFactory<Machine, typeof Franchise.prototype.id>;

  public readonly orders: HasManyRepositoryFactory<Order, typeof Franchise.prototype.id>;

  public readonly users: HasManyRepositoryFactory<User, typeof Franchise.prototype.id>;

  public readonly instaCoupons: HasManyRepositoryFactory<InstaCoupons, typeof Franchise.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MachineRepository') protected machineRepositoryGetter: Getter<MachineRepository>, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('InstaCouponsRepository') protected instaCouponsRepositoryGetter: Getter<InstaCouponsRepository>,
  ) {
    super(Franchise, dataSource);
    this.instaCoupons = this.createHasManyRepositoryFactoryFor('instaCoupons', instaCouponsRepositoryGetter,);
    this.registerInclusionResolver('instaCoupons', this.instaCoupons.inclusionResolver);
    this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
    this.machines = this.createHasManyRepositoryFactoryFor('machines', machineRepositoryGetter,);
    this.registerInclusionResolver('machines', this.machines.inclusionResolver);
  }
}


