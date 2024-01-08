import { Entity, model, property, hasMany, hasOne, belongsTo} from '@loopback/repository';
import {Order} from './order.model';
import {Franchise} from './franchise.model';

@model({settings: {strict: false}})
export class Machine extends Entity {
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
  operationType: string;

  @property({
    type: 'number',
    required: true,
  })
  charges: number;

  @property({
    type: 'string',
  })
  btAddress?: string;

  @property({
    type: 'string',
  })
  machineType?: string;

  @property({
    type: 'string',
  })
  modelNumber?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @hasMany(() => Order)
  orders: Order[];

  @belongsTo(() => Franchise)
  franchiseId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Machine>) {
    super(data);
  }
}

export interface MachineRelations {
  // describe navigational properties here
}

export type MachineWithRelations = Machine & MachineRelations;
