import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Alojamiento, AlojamientoRelations} from '../models';

export class AlojamientoRepository extends DefaultCrudRepository<
  Alojamiento,
  typeof Alojamiento.prototype.id,
  AlojamientoRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Alojamiento, dataSource);
  }
}
