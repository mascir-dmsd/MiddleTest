import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class File extends Entity {
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
  filename: string;

  @property({
    type: 'string',
    required: true,
  })
  ftpFolder: string;

  @property({
    type: 'string',
    required: true,
  })
  pathname: string;

  @property({
    type: 'date',
    required: true,
  })
  dateCreation: string;

  @property({
    type: 'date',
  })
  dateUpdate?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  credentials: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<File>) {
    super(data);
  }
}

export interface FileRelations {
  // describe navigational properties here
}

export type FileWithRelations = File & FileRelations;
