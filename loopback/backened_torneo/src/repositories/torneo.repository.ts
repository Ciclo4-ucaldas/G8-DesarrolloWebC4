import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Torneo, TorneoRelations, Equipo, DirectorTecnico, Arbitro} from '../models';
import {EquipoRepository} from './equipo.repository';
import {DirectorTecnicoRepository} from './director-tecnico.repository';
import {ArbitroRepository} from './arbitro.repository';

export class TorneoRepository extends DefaultCrudRepository<
  Torneo,
  typeof Torneo.prototype.id,
  TorneoRelations
> {

  public readonly equipos: HasManyRepositoryFactory<Equipo, typeof Torneo.prototype.id>;

  public readonly directorTecnicos: HasManyRepositoryFactory<DirectorTecnico, typeof Torneo.prototype.id>;

  public readonly arbitros: HasManyRepositoryFactory<Arbitro, typeof Torneo.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('EquipoRepository') protected equipoRepositoryGetter: Getter<EquipoRepository>, @repository.getter('DirectorTecnicoRepository') protected directorTecnicoRepositoryGetter: Getter<DirectorTecnicoRepository>, @repository.getter('ArbitroRepository') protected arbitroRepositoryGetter: Getter<ArbitroRepository>,
  ) {
    super(Torneo, dataSource);
    this.arbitros = this.createHasManyRepositoryFactoryFor('arbitros', arbitroRepositoryGetter,);
    this.registerInclusionResolver('arbitros', this.arbitros.inclusionResolver);
    this.directorTecnicos = this.createHasManyRepositoryFactoryFor('directorTecnicos', directorTecnicoRepositoryGetter,);
    this.registerInclusionResolver('directorTecnicos', this.directorTecnicos.inclusionResolver);
    this.equipos = this.createHasManyRepositoryFactoryFor('equipos', equipoRepositoryGetter,);
    this.registerInclusionResolver('equipos', this.equipos.inclusionResolver);
  }
}
