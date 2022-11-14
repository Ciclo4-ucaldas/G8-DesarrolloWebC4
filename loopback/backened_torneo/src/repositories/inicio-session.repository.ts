import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {InicioSession, InicioSessionRelations} from '../models';

export class InicioSessionRepository extends DefaultCrudRepository<
  InicioSession,
  typeof InicioSession.prototype.id,
  InicioSessionRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(InicioSession, dataSource);
  }
}
