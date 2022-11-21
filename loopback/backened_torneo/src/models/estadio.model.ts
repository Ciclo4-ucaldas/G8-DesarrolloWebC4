import {Entity, model, property, hasOne} from '@loopback/repository';
import {Torneo} from './torneo.model';

@model()
export class Estadio extends Entity {
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
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Capacidad: number;

  @property({
    type: 'string',
  })
  torneoId?: string;

  constructor(data?: Partial<Estadio>) {
    super(data);
  }
}

export interface EstadioRelations {
  // describe navigational properties here
}

export type EstadioWithRelations = Estadio & EstadioRelations;
