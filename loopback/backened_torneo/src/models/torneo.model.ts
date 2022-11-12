import {Entity, model, property, hasMany} from '@loopback/repository';
import {Equipo} from './equipo.model';
import {DirectorTecnico} from './director-tecnico.model';
import {Arbitro} from './arbitro.model';

@model()
export class Torneo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Pais: string;

  @property({
    type: 'string',
    required: true,
  })
  Nit: string;

  @property({
    type: 'string',
    required: true,
  })
  NumerodeEquipos: string;

  @property({
    type: 'string',
    required: true,
  })
  NumerodeArbitros: string;

  @hasMany(() => Equipo)
  equipos: Equipo[];

  @property({
    type: 'string',
  })
  estadioId?: string;

  @property({
    type: 'string',
  })
  directorTecnicoId?: string;

  @hasMany(() => DirectorTecnico)
  directorTecnicos: DirectorTecnico[];

  @hasMany(() => Arbitro)
  arbitro: Arbitro[];

  

  constructor(data?: Partial<Torneo>) {
    super(data);
  }
}

export interface TorneoRelations {
  // describe navigational properties here
}

export type TorneoWithRelations = Torneo & TorneoRelations;
