import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Estadio } from '../models';
import { EstadioRepository } from '../repositories';
export declare class EstadioController {
    estadioRepository: EstadioRepository;
    constructor(estadioRepository: EstadioRepository);
    create(estadio: Omit<Estadio, 'id'>): Promise<Estadio>;
    count(where?: Where<Estadio>): Promise<Count>;
    find(filter?: Filter<Estadio>): Promise<Estadio[]>;
    updateAll(estadio: Estadio, where?: Where<Estadio>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Estadio>): Promise<Estadio>;
    updateById(id: string, estadio: Estadio): Promise<void>;
    replaceById(id: string, estadio: Estadio): Promise<void>;
    deleteById(id: string): Promise<void>;
}
