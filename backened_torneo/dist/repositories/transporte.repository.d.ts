import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Transporte, TransporteRelations, Equipo } from '../models';
import { EquipoRepository } from './equipo.repository';
export declare class TransporteRepository extends DefaultCrudRepository<Transporte, typeof Transporte.prototype.id, TransporteRelations> {
    protected equipoRepositoryGetter: Getter<EquipoRepository>;
    readonly equipo: HasOneRepositoryFactory<Equipo, typeof Transporte.prototype.id>;
    constructor(dataSource: MongoDbDataSource, equipoRepositoryGetter: Getter<EquipoRepository>);
}
