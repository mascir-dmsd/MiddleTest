import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Model, ModelRelations} from '../models';

export class ModelRepository extends DefaultCrudRepository<
  Model,
  typeof Model.prototype.id,
  ModelRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Model, dataSource);
  }
}
