import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Jugador, JugadorRelations, Equipo } from '../models';
import { EquipoRepository } from './equipo.repository';
export declare class JugadorRepository extends DefaultCrudRepository<Jugador, typeof Jugador.prototype.id, JugadorRelations> {
    protected equipoRepositoryGetter: Getter<EquipoRepository>;
    readonly equipo: BelongsToAccessor<Equipo, typeof Jugador.prototype.id>;
    constructor(dataSource: MongoDbDataSource, equipoRepositoryGetter: Getter<EquipoRepository>);
}
