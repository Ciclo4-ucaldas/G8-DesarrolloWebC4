import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Jugador} from './jugador.model';
import {Torneo} from './torneo.model';

@model()
export class Equipo extends Entity {
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
  NombreEquipo: string;

  @property({
    type: 'string',
    required: true,
  })
  NumeroJugadores: string;

  @property({
    type: 'string',
    required: true,
  })
  Entrenador: string;

  @property({
    type: 'string',
    required: true,
  })
  Escudo: string;

  @belongsTo(() => Torneo)
  torneoId: string;

  constructor(data?: Partial<Equipo>) {
    super(data);
  }
}

export interface EquipoRelations {
  // describe navigational properties here
}

export type EquipoWithRelations = Equipo & EquipoRelations;
