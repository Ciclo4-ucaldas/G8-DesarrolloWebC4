import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Alojamiento } from '../models';
import { AlojamientoRepository } from '../repositories';
export declare class AlojamientoController {
    alojamientoRepository: AlojamientoRepository;
    constructor(alojamientoRepository: AlojamientoRepository);
    create(alojamiento: Omit<Alojamiento, 'id'>): Promise<Alojamiento>;
    count(where?: Where<Alojamiento>): Promise<Count>;
    find(filter?: Filter<Alojamiento>): Promise<Alojamiento[]>;
    updateAll(alojamiento: Alojamiento, where?: Where<Alojamiento>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Alojamiento>): Promise<Alojamiento>;
    updateById(id: string, alojamiento: Alojamiento): Promise<void>;
    replaceById(id: string, alojamiento: Alojamiento): Promise<void>;
    deleteById(id: string): Promise<void>;
}
