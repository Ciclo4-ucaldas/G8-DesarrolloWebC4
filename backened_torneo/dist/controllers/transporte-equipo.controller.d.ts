import { Count, Filter, Where } from '@loopback/repository';
import { Transporte, Equipo } from '../models';
import { TransporteRepository } from '../repositories';
export declare class TransporteEquipoController {
    protected transporteRepository: TransporteRepository;
    constructor(transporteRepository: TransporteRepository);
    get(id: string, filter?: Filter<Equipo>): Promise<Equipo>;
    create(id: typeof Transporte.prototype.id, equipo: Omit<Equipo, 'id'>): Promise<Equipo>;
    patch(id: string, equipo: Partial<Equipo>, where?: Where<Equipo>): Promise<Count>;
    delete(id: string, where?: Where<Equipo>): Promise<Count>;
}
