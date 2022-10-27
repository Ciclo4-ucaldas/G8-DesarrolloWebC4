import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Arbitro, ArbitroRelations, Torneo } from '../models';
import { TorneoRepository } from './torneo.repository';
export declare class ArbitroRepository extends DefaultCrudRepository<Arbitro, typeof Arbitro.prototype.id, ArbitroRelations> {
    protected torneoRepositoryGetter: Getter<TorneoRepository>;
    readonly torneos: HasManyRepositoryFactory<Torneo, typeof Arbitro.prototype.id>;
    constructor(dataSource: MongoDbDataSource, torneoRepositoryGetter: Getter<TorneoRepository>);
}
