import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Alojamiento, AlojamientoRelations, Equipo } from '../models';
import { EquipoRepository } from './equipo.repository';
export declare class AlojamientoRepository extends DefaultCrudRepository<Alojamiento, typeof Alojamiento.prototype.id, AlojamientoRelations> {
    protected equipoRepositoryGetter: Getter<EquipoRepository>;
    readonly equipos: HasManyRepositoryFactory<Equipo, typeof Alojamiento.prototype.id>;
    constructor(dataSource: MongoDbDataSource, equipoRepositoryGetter: Getter<EquipoRepository>);
}
