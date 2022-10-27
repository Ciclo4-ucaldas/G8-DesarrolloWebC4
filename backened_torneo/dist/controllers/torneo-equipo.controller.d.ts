import { Count, Filter, Where } from '@loopback/repository';
import { Torneo, Equipo } from '../models';
import { TorneoRepository } from '../repositories';
export declare class TorneoEquipoController {
    protected torneoRepository: TorneoRepository;
    constructor(torneoRepository: TorneoRepository);
    find(id: string, filter?: Filter<Equipo>): Promise<Equipo[]>;
    create(id: typeof Torneo.prototype.id, equipo: Omit<Equipo, 'id'>): Promise<Equipo>;
    patch(id: string, equipo: Partial<Equipo>, where?: Where<Equipo>): Promise<Count>;
    delete(id: string, where?: Where<Equipo>): Promise<Count>;
}
