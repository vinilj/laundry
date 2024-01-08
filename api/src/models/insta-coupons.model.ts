import { Entity, model, property, belongsTo} from '@loopback/repository';
import {Franchise} from './franchise.model';

@model({settings: {strict: true}})
export class InstaCoupons extends Entity {
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
  coupon: string;

  @property({
    type: 'number',
    required: true,
  })
  coins: number;

  @property({
    type: 'date',
    required: true,
  })
  fromDate: string;

  @property({
    type: 'boolean',
    status:true
  })
  status?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  toDate: string;

  @belongsTo(() => Franchise)
  franchiseId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstaCoupons>) {
    super(data);
  }
}

export interface InstaCouponsRelations {
  // describe navigational properties here
}

export type InstaCouponsWithRelations = InstaCoupons & InstaCouponsRelations;
