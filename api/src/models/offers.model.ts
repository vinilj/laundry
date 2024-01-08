import {Entity, model, property} from '@loopback/repository';

@model()
export class Offers extends Entity {
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
  offerName: string;

  @property({
    type: 'string',
    required: true,
  })
  coupon: string;

  @property({
    type: 'date',
    required: true,
  })
  createDate: string;

  @property({
    type: 'date',
    required: true,
  })
  expireDate: string;


  constructor(data?: Partial<Offers>) {
    super(data);
  }
}

export interface OffersRelations {
  // describe navigational properties here
}

export type OffersWithRelations = Offers & OffersRelations;
