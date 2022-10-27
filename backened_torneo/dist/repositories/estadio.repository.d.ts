import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Estadio, EstadioRelations, Torneo } from '../models';
import { TorneoRepository } from './torneo.repository';
export declare class EstadioRepository extends DefaultCrudRepository<Estadio, typeof Estadio.prototype.id, EstadioRelations> {
    protected torneoRepositoryGetter: Getter<TorneoRepository>;
    readonly torneo: HasOneRepositoryFactory<Torneo, typeof Estadio.prototype.id>;
    constructor(dataSource: MongoDbDataSource, torneoRepositoryGetter: Getter<TorneoRepository>);
}
