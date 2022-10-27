import { Entity } from '@loopback/repository';
import { Torneo } from './torneo.model';
export declare class Arbitro extends Entity {
    id?: string;
    Nombre: string;
    LicenciaArbitro: string;
    Telefono: string;
    torneos: Torneo[];
    constructor(data?: Partial<Arbitro>);
}
export interface ArbitroRelations {
}
export declare type ArbitroWithRelations = Arbitro & ArbitroRelations;
