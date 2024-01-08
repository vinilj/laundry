import { DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import { User, UserRelations, Order, Wallet, WalletHistory} from '../models';
import { MysqlDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { OrderRepository } from './order.repository';
import {WalletRepository} from './wallet.repository';
import {WalletHistoryRepository} from './wallet-history.repository';

export type Credentials = {
  email: string;
  password: string;
};

export type forgotPasswordCredentials = {
  email: string;
};

export type mobileCredentials = {
  mobile: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  public readonly user: BelongsToAccessor<User, typeof User.prototype.id>;

  public readonly orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;

  public readonly wallet: BelongsToAccessor<Wallet, typeof User.prototype.id>;

  public readonly wallets: HasManyRepositoryFactory<Wallet, typeof User.prototype.id>;

  public readonly walletHistories: HasManyRepositoryFactory<WalletHistory, typeof User.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>, @repository.getter('WalletRepository') protected walletRepositoryGetter: Getter<WalletRepository>, @repository.getter('WalletHistoryRepository') protected walletHistoryRepositoryGetter: Getter<WalletHistoryRepository>,
  ) {
    super(User, dataSource);
    this.walletHistories = this.createHasManyRepositoryFactoryFor('walletHistories', walletHistoryRepositoryGetter,);
    this.registerInclusionResolver('walletHistories', this.walletHistories.inclusionResolver);
    this.wallets = this.createHasManyRepositoryFactoryFor('wallets', walletRepositoryGetter,);
    this.registerInclusionResolver('wallets', this.wallets.inclusionResolver);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
