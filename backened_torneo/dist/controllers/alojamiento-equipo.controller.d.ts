import { Count, Filter, Where } from '@loopback/repository';
import { Alojamiento, Equipo } from '../models';
import { AlojamientoRepository } from '../repositories';
export declare class AlojamientoEquipoController {
    protected alojamientoRepository: AlojamientoRepository;
    constructor(alojamientoRepository: AlojamientoRepository);
    find(id: string, filter?: Filter<Equipo>): Promise<Equipo[]>;
    create(id: typeof Alojamiento.prototype.id, equipo: Omit<Equipo, 'id'>): Promise<Equipo>;
    patch(id: string, equipo: Partial<Equipo>, where?: Where<Equipo>): Promise<Count>;
    delete(id: string, where?: Where<Equipo>): Promise<Count>;
}
