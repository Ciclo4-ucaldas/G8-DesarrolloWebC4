import { Entity } from '@loopback/repository';
import { Equipo } from './equipo.model';
export declare class Alojamiento extends Entity {
    id?: string;
    NombreAlojamiento: string;
    Ubicacion: string;
    NumerodeHabitaciones: string;
    equipos: Equipo[];
    constructor(data?: Partial<Alojamiento>);
}
export interface AlojamientoRelations {
}
export declare type AlojamientoWithRelations = Alojamiento & AlojamientoRelations;
