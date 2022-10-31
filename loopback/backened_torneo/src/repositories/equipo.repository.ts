import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Equipo, EquipoRelations, Jugador, DirectorTecnico} from '../models';
import {JugadorRepository} from './jugador.repository';
import {DirectorTecnicoRepository} from './director-tecnico.repository';

export class EquipoRepository extends DefaultCrudRepository<
  Equipo,
  typeof Equipo.prototype.id,
  EquipoRelations
> {

  public readonly jugadors: HasManyRepositoryFactory<Jugador, typeof Equipo.prototype.id>;

  public readonly directorTecnicos: HasManyRepositoryFactory<DirectorTecnico, typeof Equipo.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('JugadorRepository') protected jugadorRepositoryGetter: Getter<JugadorRepository>, @repository.getter('DirectorTecnicoRepository') protected directorTecnicoRepositoryGetter: Getter<DirectorTecnicoRepository>,
  ) {
    super(Equipo, dataSource);
    this.directorTecnicos = this.createHasManyRepositoryFactoryFor('directorTecnicos', directorTecnicoRepositoryGetter,);
    this.jugadors = this.createHasManyRepositoryFactoryFor('jugadors', jugadorRepositoryGetter,);
    this.registerInclusionResolver('jugadors', this.jugadors.inclusionResolver);
  }
}
