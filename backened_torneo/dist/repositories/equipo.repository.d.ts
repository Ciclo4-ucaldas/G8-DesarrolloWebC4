import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Equipo, EquipoRelations, Jugador } from '../models';
import { JugadorRepository } from './jugador.repository';
export declare class EquipoRepository extends DefaultCrudRepository<Equipo, typeof Equipo.prototype.id, EquipoRelations> {
    protected jugadorRepositoryGetter: Getter<JugadorRepository>;
    readonly jugadors: HasManyRepositoryFactory<Jugador, typeof Equipo.prototype.id>;
    constructor(dataSource: MongoDbDataSource, jugadorRepositoryGetter: Getter<JugadorRepository>);
}
