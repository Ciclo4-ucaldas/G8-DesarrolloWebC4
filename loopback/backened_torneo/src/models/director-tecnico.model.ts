import {Entity, model, property, hasOne} from '@loopback/repository';
import { InicioSession } from './inicio-session.model';
import {Torneo} from './torneo.model';
import {Equipo} from './equipo.model';

@model()
export class DirectorTecnico extends InicioSession {
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
    required: false,
  })
  Clave: string;


  @property({
    type: 'string',
    required: false,
  })
  Documento: string;

  @property({
    type: 'string',
    required: false,
  })
  TipoDocumento: string;

  @property({
    type: 'string',
    required: false,
  })
  Categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @hasOne(() => Equipo)
  equipo: Equipo;

  constructor(data?: Partial<DirectorTecnico>) {
    super(data);
  }
}

export interface DirectorTecnicoRelations {
  // describe navigational properties here
}

export type DirectorTecnicoWithRelations = DirectorTecnico & DirectorTecnicoRelations;
