import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Arbitro } from '../models';
import { ArbitroRepository } from '../repositories';
export declare class ArbitroController {
    arbitroRepository: ArbitroRepository;
    constructor(arbitroRepository: ArbitroRepository);
    create(arbitro: Omit<Arbitro, 'id'>): Promise<Arbitro>;
    count(where?: Where<Arbitro>): Promise<Count>;
    find(filter?: Filter<Arbitro>): Promise<Arbitro[]>;
    updateAll(arbitro: Arbitro, where?: Where<Arbitro>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Arbitro>): Promise<Arbitro>;
    updateById(id: string, arbitro: Arbitro): Promise<void>;
    replaceById(id: string, arbitro: Arbitro): Promise<void>;
    deleteById(id: string): Promise<void>;
}
