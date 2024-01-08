import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { User } from './user.model';
import { Franchise } from './franchise.model';
import { Wallet } from './wallet.model';

@model({settings: {strict: false}})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  startTime: string;

  @property({
    type: 'date',
  })
  endTime?: string;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float',
    },
  })
  weight?: number;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float',
    },
  })
  amount?: number;

  @property({
    type: 'string',
    required: true,
  })
  paymentStatus: string;

  @property({
    type: 'string',
  })
  orderStatus?: string;

  @property({
    type: 'string',
  })
  feedback?: string;

  @property({
    type: 'string',
  })
  opertationType?: string;
  @property({
    type: 'number',
  })
  machineId?: number;

  @property({
    type: 'number',
  })
  rewardAmount?: number;

  @property({
    type: 'number',
  })
  walletDeductions?: number;

  @property({
    type: 'number',
  })
  promoDeductions?: number;

  @property({
    type: 'string',
  })
  promoCode?: string;

  @property({
    type: 'string',
  })
  transactionId?: string;

  @property({
    type: 'string',
  })
  transactionType?: string;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float',
    },
  })
  transactionAmount?: string;

  @property({
    type: 'boolean',
  })
  btTrigger?: boolean;

  @property({
    type: 'number',
  })
  token?: number;

  @property({
    type: 'string',
  })
  invoice?: string;
  
  @property({
    type: 'string',
  })
  orderTimestamp?: Date;

@property({
    type: 'boolean',
  })
  settlement?: boolean;


  @property({
    type: 'string',
  })
  comments?: string;

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => Franchise)
  franchiseId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
