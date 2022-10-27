import { Count, Filter, Where } from '@loopback/repository';
import { Estadio, Torneo } from '../models';
import { EstadioRepository } from '../repositories';
export declare class EstadioTorneoController {
    protected estadioRepository: EstadioRepository;
    constructor(estadioRepository: EstadioRepository);
    get(id: string, filter?: Filter<Torneo>): Promise<Torneo>;
    create(id: typeof Estadio.prototype.id, torneo: Omit<Torneo, 'id'>): Promise<Torneo>;
    patch(id: string, torneo: Partial<Torneo>, where?: Where<Torneo>): Promise<Count>;
    delete(id: string, where?: Where<Torneo>): Promise<Count>;
}
