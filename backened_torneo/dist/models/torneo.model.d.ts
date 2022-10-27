import { Entity } from '@loopback/repository';
import { Equipo } from './equipo.model';
export declare class Torneo extends Entity {
    id?: string;
    Pais: string;
    NumerodeEquipos: string;
    NumerodeArbitros: string;
    equipos: Equipo[];
    estadioId?: string;
    arbitroId?: string;
    constructor(data?: Partial<Torneo>);
}
export interface TorneoRelations {
}
export declare type TorneoWithRelations = Torneo & TorneoRelations;
