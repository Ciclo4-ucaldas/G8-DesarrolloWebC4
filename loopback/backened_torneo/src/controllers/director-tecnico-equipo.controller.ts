import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  DirectorTecnico,
  Equipo,
} from '../models';
import {DirectorTecnicoRepository} from '../repositories';

export class DirectorTecnicoEquipoController {
  constructor(
    @repository(DirectorTecnicoRepository) protected directorTecnicoRepository: DirectorTecnicoRepository,
  ) { }
  @get('/director-tecnicos/{id}/equipo', {
    responses: {
      '200': {
        description: 'DirectorTecnico has one Equipo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Equipo),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Equipo>,
  ): Promise<Equipo> {
    return this.directorTecnicoRepository.equipo(id).get(filter);
  }

  @post('/director-tecnicos/{id}/equipo', {
    responses: {
      '200': {
        description: 'DirectorTecnico model instance',
        content: {'application/json': {schema: getModelSchemaRef(Equipo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DirectorTecnico.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipo, {
            title: 'NewEquipoInDirectorTecnico',
            exclude: ['id'],
            optional: ['directorTecnicoId']
          }),
        },
      },
    }) equipo: Omit<Equipo, 'id'>,
  ): Promise<Equipo> {
    return this.directorTecnicoRepository.equipo(id).create(equipo);
  }

  @patch('/director-tecnicos/{id}/equipo', {
    responses: {
      '200': {
        description: 'DirectorTecnico.Equipo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipo, {partial: true}),
        },
      },
    })
    equipo: Partial<Equipo>,
    @param.query.object('where', getWhereSchemaFor(Equipo)) where?: Where<Equipo>,
  ): Promise<Count> {
    return this.directorTecnicoRepository.equipo(id).patch(equipo, where);
  }

  @del('/director-tecnicos/{id}/equipo', {
    responses: {
      '200': {
        description: 'DirectorTecnico.Equipo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Equipo)) where?: Where<Equipo>,
  ): Promise<Count> {
    return this.directorTecnicoRepository.equipo(id).delete(where);
  }
}
