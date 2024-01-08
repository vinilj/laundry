import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RechargeWallet extends Entity {
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
  couponCode: string;

  @property({
    type: 'number',
    required: true,
  })
  coins: number;

  // @property({
  //   type: 'date',
  //   required: true,
  // })
  // validFrom: string;

  // @property({
  //   type: 'date',
  //   required: true,
  // })
  // validTo: string;
  @property({
    type: 'number',
  })
  userId?: number;

  @property({
    type: 'string',
  })
  mobile: string;

  @property({
    type: 'date',
  })
  usedDate?: string;

  @property({
    type: 'boolean',
    default: 0,
  })
  status?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RechargeWallet>) {
    super(data);
  }
}

export interface RechargeWalletRelations {
  // describe navigational properties here
}

export type RechargeWalletWithRelations = RechargeWallet & RechargeWalletRelations;
