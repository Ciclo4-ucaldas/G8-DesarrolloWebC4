import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Transporte, TransporteRelations} from '../models';

export class TransporteRepository extends DefaultCrudRepository<
  Transporte,
  typeof Transporte.prototype.id,
  TransporteRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Transporte, dataSource);
  }
}
