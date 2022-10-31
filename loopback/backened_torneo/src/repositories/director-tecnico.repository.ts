import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {DirectorTecnico, DirectorTecnicoRelations, Equipo} from '../models';
import {EquipoRepository} from './equipo.repository';

export class DirectorTecnicoRepository extends DefaultCrudRepository<
  DirectorTecnico,
  typeof DirectorTecnico.prototype.id,
  DirectorTecnicoRelations
> {

  public readonly equipo: HasOneRepositoryFactory<Equipo, typeof DirectorTecnico.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('EquipoRepository') protected equipoRepositoryGetter: Getter<EquipoRepository>,
  ) {
    super(DirectorTecnico, dataSource);
    this.equipo = this.createHasOneRepositoryFactoryFor('equipo', equipoRepositoryGetter);
  }
}
