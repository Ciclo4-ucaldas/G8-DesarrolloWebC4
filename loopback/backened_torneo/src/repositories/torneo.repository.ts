import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Torneo, TorneoRelations, Arbitro, Equipo, Estadio} from '../models';
import {ArbitroRepository} from './arbitro.repository';
import {EquipoRepository} from './equipo.repository';
import {EstadioRepository} from './estadio.repository';

export class TorneoRepository extends DefaultCrudRepository<
  Torneo,
  typeof Torneo.prototype.id,
  TorneoRelations
> {

  public readonly arbitros: HasManyRepositoryFactory<Arbitro, typeof Torneo.prototype.id>;

  public readonly equipos: HasManyRepositoryFactory<Equipo, typeof Torneo.prototype.id>;

  public readonly estadios: HasManyRepositoryFactory<Estadio, typeof Torneo.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('ArbitroRepository') protected arbitroRepositoryGetter: Getter<ArbitroRepository>, @repository.getter('EquipoRepository') protected equipoRepositoryGetter: Getter<EquipoRepository>, @repository.getter('EstadioRepository') protected estadioRepositoryGetter: Getter<EstadioRepository>,
  ) {
    super(Torneo, dataSource);
    this.estadios = this.createHasManyRepositoryFactoryFor('estadios', estadioRepositoryGetter,);
    this.registerInclusionResolver('estadios', this.estadios.inclusionResolver);
    this.equipos = this.createHasManyRepositoryFactoryFor('equipos', equipoRepositoryGetter,);
    this.registerInclusionResolver('equipos', this.equipos.inclusionResolver);
    this.arbitros = this.createHasManyRepositoryFactoryFor('arbitros', arbitroRepositoryGetter,);
    this.registerInclusionResolver('arbitros', this.arbitros.inclusionResolver);
  }
}
