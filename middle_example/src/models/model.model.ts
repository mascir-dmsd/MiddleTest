import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Model extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  correction?: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  tarray: number[];

  @property({
    type: 'number',
    required: true,
  })
  intercept: number;

  @property({
    type: 'boolean',
    required: true,
  })
  hasModel: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Model>) {
    super(data);
  }
}

export interface ModelRelations {
  // describe navigational properties here
}

export type ModelWithRelations = Model & ModelRelations;
