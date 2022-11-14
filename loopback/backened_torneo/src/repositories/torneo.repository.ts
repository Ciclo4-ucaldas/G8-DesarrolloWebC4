import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Torneo, TorneoRelations, Arbitro, Equipo} from '../models';
import {ArbitroRepository} from './arbitro.repository';
import {EquipoRepository} from './equipo.repository';

export class TorneoRepository extends DefaultCrudRepository<
  Torneo,
  typeof Torneo.prototype.id,
  TorneoRelations
> {

  public readonly arbitros: HasManyRepositoryFactory<Arbitro, typeof Torneo.prototype.id>;

  public readonly equipos: HasManyRepositoryFactory<Equipo, typeof Torneo.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('ArbitroRepository') protected arbitroRepositoryGetter: Getter<ArbitroRepository>, @repository.getter('EquipoRepository') protected equipoRepositoryGetter: Getter<EquipoRepository>,
  ) {
    super(Torneo, dataSource);
    this.equipos = this.createHasManyRepositoryFactoryFor('equipos', equipoRepositoryGetter,);
    this.registerInclusionResolver('equipos', this.equipos.inclusionResolver);
    this.arbitros = this.createHasManyRepositoryFactoryFor('arbitros', arbitroRepositoryGetter,);
    this.registerInclusionResolver('arbitros', this.arbitros.inclusionResolver);
  }
}
