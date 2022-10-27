import { Entity } from '@loopback/repository';
import { Equipo } from './equipo.model';
export declare class Transporte extends Entity {
    id?: string;
    NombreConductor: string;
    Matricula: string;
    equipo: Equipo;
    constructor(data?: Partial<Transporte>);
}
export interface TransporteRelations {
}
export declare type TransporteWithRelations = Transporte & TransporteRelations;
