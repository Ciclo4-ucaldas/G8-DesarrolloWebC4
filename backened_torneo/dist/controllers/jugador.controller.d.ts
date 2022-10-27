import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Jugador } from '../models';
import { JugadorRepository } from '../repositories';
export declare class JugadorController {
    jugadorRepository: JugadorRepository;
    constructor(jugadorRepository: JugadorRepository);
    create(jugador: Omit<Jugador, 'id'>): Promise<Jugador>;
    count(where?: Where<Jugador>): Promise<Count>;
    find(filter?: Filter<Jugador>): Promise<Jugador[]>;
    updateAll(jugador: Jugador, where?: Where<Jugador>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Jugador>): Promise<Jugador>;
    updateById(id: string, jugador: Jugador): Promise<void>;
    replaceById(id: string, jugador: Jugador): Promise<void>;
    deleteById(id: string): Promise<void>;
}
