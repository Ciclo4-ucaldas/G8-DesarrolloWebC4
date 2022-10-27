import { Entity } from '@loopback/repository';
import { Torneo } from './torneo.model';
export declare class Estadio extends Entity {
    id?: string;
    Nombre: string;
    Capacidad: number;
    torneo: Torneo;
    constructor(data?: Partial<Estadio>);
}
export interface EstadioRelations {
}
export declare type EstadioWithRelations = Estadio & EstadioRelations;
