import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Alojamiento} from './alojamiento.model';
import {Jugador} from './jugador.model';
import {Torneo} from './torneo.model';
import {Transporte} from './transporte.model';

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

  @hasMany(() => Alojamiento)
  alojamientos: Alojamiento[];

  @hasMany(() => Transporte)
  transportes: Transporte[];

  @hasMany(() => Jugador)
  jugador: Jugador;

  @property({
    type: 'string',
  })
  directorTecnicoId?: string;

  constructor(data?: Partial<Equipo>) {
    super(data);
  }
}

export interface EquipoRelations {
  // describe navigational properties here
}

export type EquipoWithRelations = Equipo & EquipoRelations;
