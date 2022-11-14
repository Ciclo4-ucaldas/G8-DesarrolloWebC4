import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Estadio, EstadioRelations} from '../models';

export class EstadioRepository extends DefaultCrudRepository<
  Estadio,
  typeof Estadio.prototype.id,
  EstadioRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Estadio, dataSource);
  }
}
