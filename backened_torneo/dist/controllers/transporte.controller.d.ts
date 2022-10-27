import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Transporte } from '../models';
import { TransporteRepository } from '../repositories';
export declare class TransporteController {
    transporteRepository: TransporteRepository;
    constructor(transporteRepository: TransporteRepository);
    create(transporte: Omit<Transporte, 'id'>): Promise<Transporte>;
    count(where?: Where<Transporte>): Promise<Count>;
    find(filter?: Filter<Transporte>): Promise<Transporte[]>;
    updateAll(transporte: Transporte, where?: Where<Transporte>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Transporte>): Promise<Transporte>;
    updateById(id: string, transporte: Transporte): Promise<void>;
    replaceById(id: string, transporte: Transporte): Promise<void>;
    deleteById(id: string): Promise<void>;
}
