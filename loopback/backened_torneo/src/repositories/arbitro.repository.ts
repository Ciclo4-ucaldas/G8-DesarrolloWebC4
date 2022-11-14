import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Arbitro, ArbitroRelations} from '../models';

export class ArbitroRepository extends DefaultCrudRepository<
  Arbitro,
  typeof Arbitro.prototype.id,
  ArbitroRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Arbitro, dataSource);
  }
}
