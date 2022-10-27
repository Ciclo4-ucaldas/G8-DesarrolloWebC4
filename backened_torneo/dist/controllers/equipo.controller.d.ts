import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Equipo } from '../models';
import { EquipoRepository } from '../repositories';
export declare class EquipoController {
    equipoRepository: EquipoRepository;
    constructor(equipoRepository: EquipoRepository);
    create(equipo: Omit<Equipo, 'id'>): Promise<Equipo>;
    count(where?: Where<Equipo>): Promise<Count>;
    find(filter?: Filter<Equipo>): Promise<Equipo[]>;
    updateAll(equipo: Equipo, where?: Where<Equipo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Equipo>): Promise<Equipo>;
    updateById(id: string, equipo: Equipo): Promise<void>;
    replaceById(id: string, equipo: Equipo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
