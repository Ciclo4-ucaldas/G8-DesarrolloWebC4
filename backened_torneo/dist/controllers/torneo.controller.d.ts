import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Torneo } from '../models';
import { TorneoRepository } from '../repositories';
export declare class TorneoController {
    torneoRepository: TorneoRepository;
    constructor(torneoRepository: TorneoRepository);
    create(torneo: Omit<Torneo, 'id'>): Promise<Torneo>;
    count(where?: Where<Torneo>): Promise<Count>;
    find(filter?: Filter<Torneo>): Promise<Torneo[]>;
    updateAll(torneo: Torneo, where?: Where<Torneo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Torneo>): Promise<Torneo>;
    updateById(id: string, torneo: Torneo): Promise<void>;
    replaceById(id: string, torneo: Torneo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
