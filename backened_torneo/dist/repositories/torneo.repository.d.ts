import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Torneo, TorneoRelations, Equipo } from '../models';
import { EquipoRepository } from './equipo.repository';
export declare class TorneoRepository extends DefaultCrudRepository<Torneo, typeof Torneo.prototype.id, TorneoRelations> {
    protected equipoRepositoryGetter: Getter<EquipoRepository>;
    readonly equipos: HasManyRepositoryFactory<Equipo, typeof Torneo.prototype.id>;
    constructor(dataSource: MongoDbDataSource, equipoRepositoryGetter: Getter<EquipoRepository>);
}
