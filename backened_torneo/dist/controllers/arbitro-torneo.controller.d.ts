import { Count, Filter, Where } from '@loopback/repository';
import { Arbitro, Torneo } from '../models';
import { ArbitroRepository } from '../repositories';
export declare class ArbitroTorneoController {
    protected arbitroRepository: ArbitroRepository;
    constructor(arbitroRepository: ArbitroRepository);
    find(id: string, filter?: Filter<Torneo>): Promise<Torneo[]>;
    create(id: typeof Arbitro.prototype.id, torneo: Omit<Torneo, 'id'>): Promise<Torneo>;
    patch(id: string, torneo: Partial<Torneo>, where?: Where<Torneo>): Promise<Count>;
    delete(id: string, where?: Where<Torneo>): Promise<Count>;
}
