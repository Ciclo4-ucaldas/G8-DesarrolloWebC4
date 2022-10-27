import { Entity } from '@loopback/repository';
export declare class Jugador extends Entity {
    id?: string;
    Documento: string;
    EstadoCivil: string;
    NumeroJugador: string;
    Sexo: string;
    Posicion: string;
    Eps: string;
    equipoId: string;
    constructor(data?: Partial<Jugador>);
}
export interface JugadorRelations {
}
export declare type JugadorWithRelations = Jugador & JugadorRelations;
