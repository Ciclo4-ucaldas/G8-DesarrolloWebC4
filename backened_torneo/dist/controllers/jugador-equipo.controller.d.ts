import { Jugador, Equipo } from '../models';
import { JugadorRepository } from '../repositories';
export declare class JugadorEquipoController {
    jugadorRepository: JugadorRepository;
    constructor(jugadorRepository: JugadorRepository);
    getEquipo(id: typeof Jugador.prototype.id): Promise<Equipo>;
}
