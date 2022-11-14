import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Credenciales, CredencialesRelations} from '../models';

export class CredencialesRepository extends DefaultCrudRepository<
  Credenciales,
  typeof Credenciales.prototype.id,
  CredencialesRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Credenciales, dataSource);
  }
}
