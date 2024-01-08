import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Otp extends Entity {
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
  mobile: string;

  @property({
    type: 'number',
    required: true,
  })
  otp: number;

  @property({
    type: 'date',
    required: true,
  })
  time: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Otp>) {
    super(data);
  }
}

export interface OtpRelations {
  // describe navigational properties here
}

export type OtpWithRelations = Otp & OtpRelations;
