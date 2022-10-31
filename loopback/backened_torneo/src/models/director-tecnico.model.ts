import {Entity, model, property, hasOne} from '@loopback/repository';
import {Equipo} from './equipo.model';

@model()
export class DirectorTecnico extends Entity {
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
  Nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Documento: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoDocumento: string;

  @property({
    type: 'string',
    required: true,
  })

  Categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @hasOne(() => Equipo)
  equipo: Equipo;

  @property({
    type: 'string',
  })
  equipoId?: string;

  constructor(data?: Partial<DirectorTecnico>) {
    super(data);
  }
}

export interface DirectorTecnicoRelations {
  // describe navigational properties here
}

export type DirectorTecnicoWithRelations = DirectorTecnico & DirectorTecnicoRelations;
