import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Order } from './order.model';
import { Wallet } from './wallet.model';
import { WalletHistory } from './wallet-history.model';

@model({ settings: { strict: false } })
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  mobile: string;

  @property({
    type: 'string',
  })
  stayIn?: string;

  @property({
    type: 'string',
  })
  userType?: string;

  @property({
    type: 'string',
  })
  dob?: Date;

  @property({
    type: 'date',
    dataType: 'timestamp',
    "mysql": {
      "default": "CURRENT_TIMESTAMP"
    }
  })
  lastActivityDate?: Date;

  @property({
    type: 'boolean',
    status: true
  })
  status?: boolean;

  @property({
    type: 'boolean',
    status: true
  })
  smsSubsciption?: boolean;

  @property({
    type: 'boolean',
    status: true
  })
  emailSubsciption?: boolean;

  @property({
    type: 'boolean',
    status: true
  })
  pushSubsciption?: boolean;

  @hasMany(() => Order)
  orders: Order[];

  @property.array(String)
  permissions: String[]

  @hasMany(() => Wallet)
  wallets: Wallet[];

  @property({
    type: 'number',
  })
  franchiseId?: number;

  @property({
    type: 'string',
  })
  deviceToken?: string;

  @property({
    type: 'boolean',
  })
  userNotification?: boolean;

  @hasMany(() => WalletHistory)
  walletHistories: WalletHistory[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;



  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
