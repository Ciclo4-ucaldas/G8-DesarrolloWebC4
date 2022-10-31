import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {DirectorTecnico, DirectorTecnicoRelations} from '../models';

export class DirectorTecnicoRepository extends DefaultCrudRepository<
  DirectorTecnico,
  typeof DirectorTecnico.prototype.id,
  DirectorTecnicoRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(DirectorTecnico, dataSource);
  }
}
