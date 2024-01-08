import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Gst extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  gstValue: number;


  constructor(data?: Partial<Gst>) {
    super(data);
  }
}

export interface GstRelations {
  // describe navigational properties here
}

export type GstWithRelations = Gst & GstRelations;
