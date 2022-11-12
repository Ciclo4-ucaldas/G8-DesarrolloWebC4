import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Torneo} from './torneo.model';

@model()
export class Arbitro extends Entity {
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

  @property({
    type: 'string',
  })
  torneoId?: string;

  @hasOne(() => Torneo)
  torneo: Torneo[];

  constructor(data?: Partial<Arbitro>) {
    super(data);
  }
}

export interface ArbitroRelations {
  // describe navigational properties here
}

export type ArbitroWithRelations = Arbitro & ArbitroRelations;
