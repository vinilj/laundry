import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Machine } from './machine.model';
import { Order } from './order.model';
import { User } from './user.model';
import { InstaCoupons } from './insta-coupons.model';

@model({ settings: { strict: false } })
export class Franchise extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  mobile?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
  })
  discount?: number;

  @property({
    type: 'boolean'
  })
  waterlevel?: boolean;

  @hasMany(() => Machine)
  machines: Machine[];

  @hasMany(() => Order)
  orders: Order[];

  @hasMany(() => User)
  users: User[];

  @hasMany(() => InstaCoupons)
  instaCoupons: InstaCoupons[];

  // @property({
  //   type: 'number',
  // })
  // machineId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Franchise>) {
    super(data);
  }
}

export interface FranchiseRelations {
  // describe navigational properties here
}

export type FranchiseWithRelations = Franchise & FranchiseRelations;
