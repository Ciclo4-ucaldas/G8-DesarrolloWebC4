import {Entity, model, property, hasMany, hasOne, belongsTo} from '@loopback/repository';
import { InicioSession } from './inicio-session.model';
import {Torneo} from './torneo.model';

@model()
export class Arbitro extends InicioSession {
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
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  LicenciaArbitro: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  constructor(data?: Partial<Arbitro>) {
    super(data);
  }
}

export interface ArbitroRelations {
  // describe navigational properties here
}

export type ArbitroWithRelations = Arbitro & ArbitroRelations;
