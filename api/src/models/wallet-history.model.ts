import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class WalletHistory extends Entity {
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
  outletName: string;

  @property({
    type: 'date',
    dataType: 'timestamp',
    "mysql": {
      "default":"CURRENT_TIMESTAMP"
    }
  })
  createdDate?: Date;

  @property({
    type: 'string',
    required: true,
  })
  orderId: string;

  @property({
    type: 'number',
    required: true,
  })
  coins: number;

  @property({
    type: 'string',
    required: true,
  })
  transactionType: string;

  @property({
    type: 'number',
  })
  userId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WalletHistory>) {
    super(data);
  }
}

export interface WalletHistoryRelations {
  // describe navigational properties here
}

export type WalletHistoryWithRelations = WalletHistory & WalletHistoryRelations;
