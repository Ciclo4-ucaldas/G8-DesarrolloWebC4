import { Entity } from '@loopback/repository';
import { Jugador } from './jugador.model';
export declare class Equipo extends Entity {
    id?: string;
    NombreEquipo: string;
    NumeroJugadores: string;
    Entrenador: string;
    Escudo: string;
    jugadors: Jugador[];
    transporteId?: string;
    alojamientoId?: string;
    torneoId?: string;
    constructor(data?: Partial<Equipo>);
}
export interface EquipoRelations {
}
export declare type EquipoWithRelations = Equipo & EquipoRelations;
