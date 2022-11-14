import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Equipo, EquipoRelations, Torneo, Alojamiento, Transporte, Jugador} from '../models';
import {TorneoRepository} from './torneo.repository';
import {AlojamientoRepository} from './alojamiento.repository';
import {TransporteRepository} from './transporte.repository';
import {JugadorRepository} from './jugador.repository';

export class EquipoRepository extends DefaultCrudRepository<
  Equipo,
  typeof Equipo.prototype.id,
  EquipoRelations
> {

  public readonly torneo: BelongsToAccessor<Torneo, typeof Equipo.prototype.id>;

  public readonly alojamientos: HasManyRepositoryFactory<Alojamiento, typeof Equipo.prototype.id>;

  public readonly transportes: HasManyRepositoryFactory<Transporte, typeof Equipo.prototype.id>;

  public readonly jugador: HasOneRepositoryFactory<Jugador, typeof Equipo.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('TorneoRepository') protected torneoRepositoryGetter: Getter<TorneoRepository>, @repository.getter('AlojamientoRepository') protected alojamientoRepositoryGetter: Getter<AlojamientoRepository>, @repository.getter('TransporteRepository') protected transporteRepositoryGetter: Getter<TransporteRepository>, @repository.getter('JugadorRepository') protected jugadorRepositoryGetter: Getter<JugadorRepository>,
  ) {
    super(Equipo, dataSource);
    this.jugador = this.createHasOneRepositoryFactoryFor('jugador', jugadorRepositoryGetter);
    this.registerInclusionResolver('jugador', this.jugador.inclusionResolver);
    this.transportes = this.createHasManyRepositoryFactoryFor('transportes', transporteRepositoryGetter,);
    this.registerInclusionResolver('transportes', this.transportes.inclusionResolver);
    this.alojamientos = this.createHasManyRepositoryFactoryFor('alojamientos', alojamientoRepositoryGetter,);
    this.registerInclusionResolver('alojamientos', this.alojamientos.inclusionResolver);
    this.torneo = this.createBelongsToAccessorFor('torneo', torneoRepositoryGetter,);
    this.registerInclusionResolver('torneo', this.torneo.inclusionResolver);
  }
}
