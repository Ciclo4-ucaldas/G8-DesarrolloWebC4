import {Entity, model, property} from '@loopback/repository';

@model()
export class InicioSession extends Entity {
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
  usuario: string;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;


  constructor(data?: Partial<InicioSession>) {
    super(data);
  }
}

export interface InicioSessionRelations {
  // describe navigational properties here
}

export type InicioSessionWithRelations = InicioSession & InicioSessionRelations;
