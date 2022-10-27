import { Count, Filter, Where } from '@loopback/repository';
import { Equipo, Jugador } from '../models';
import { EquipoRepository } from '../repositories';
export declare class EquipoJugadorController {
    protected equipoRepository: EquipoRepository;
    constructor(equipoRepository: EquipoRepository);
    find(id: string, filter?: Filter<Jugador>): Promise<Jugador[]>;
    create(id: typeof Equipo.prototype.id, jugador: Omit<Jugador, 'id'>): Promise<Jugador>;
    patch(id: string, jugador: Partial<Jugador>, where?: Where<Jugador>): Promise<Count>;
    delete(id: string, where?: Where<Jugador>): Promise<Count>;
}
