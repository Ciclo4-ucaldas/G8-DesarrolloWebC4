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
  Equipo,
  DirectorTecnico,
} from '../models';
import {EquipoRepository} from '../repositories';

export class EquipoDirectorTecnicoController {
  constructor(
    @repository(EquipoRepository) protected equipoRepository: EquipoRepository,
  ) { }

  @get('/equipos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Array of Equipo has many DirectorTecnico',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DirectorTecnico)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<DirectorTecnico>,
  ): Promise<DirectorTecnico[]> {
    return this.equipoRepository.directorTecnicos(id).find(filter);
  }

  @post('/equipos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Equipo model instance',
        content: {'application/json': {schema: getModelSchemaRef(DirectorTecnico)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Equipo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DirectorTecnico, {
            title: 'NewDirectorTecnicoInEquipo',
            exclude: ['id'],
            optional: ['equipoId']
          }),
        },
      },
    }) directorTecnico: Omit<DirectorTecnico, 'id'>,
  ): Promise<DirectorTecnico> {
    return this.equipoRepository.directorTecnicos(id).create(directorTecnico);
  }

  @patch('/equipos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Equipo.DirectorTecnico PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DirectorTecnico, {partial: true}),
        },
      },
    })
    directorTecnico: Partial<DirectorTecnico>,
    @param.query.object('where', getWhereSchemaFor(DirectorTecnico)) where?: Where<DirectorTecnico>,
  ): Promise<Count> {
    return this.equipoRepository.directorTecnicos(id).patch(directorTecnico, where);
  }

  @del('/equipos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Equipo.DirectorTecnico DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DirectorTecnico)) where?: Where<DirectorTecnico>,
  ): Promise<Count> {
    return this.equipoRepository.directorTecnicos(id).delete(where);
  }
}
