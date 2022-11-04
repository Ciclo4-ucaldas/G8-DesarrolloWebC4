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
  Torneo,
  DirectorTecnico,
} from '../models';
import {TorneoRepository} from '../repositories';

export class TorneoDirectorTecnicoController {
  constructor(
    @repository(TorneoRepository) protected torneoRepository: TorneoRepository,
  ) { }

  @get('/torneos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Array of Torneo has many DirectorTecnico',
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
    return this.torneoRepository.directorTecnicos(id).find(filter);
  }

  @post('/torneos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Torneo model instance',
        content: {'application/json': {schema: getModelSchemaRef(DirectorTecnico)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Torneo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DirectorTecnico, {
            title: 'NewDirectorTecnicoInTorneo',
            exclude: ['id'],
            optional: ['torneoId']
          }),
        },
      },
    }) directorTecnico: Omit<DirectorTecnico, 'id'>,
  ): Promise<DirectorTecnico> {
    return this.torneoRepository.directorTecnicos(id).create(directorTecnico);
  }

  @patch('/torneos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Torneo.DirectorTecnico PATCH success count',
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
    return this.torneoRepository.directorTecnicos(id).patch(directorTecnico, where);
  }

  @del('/torneos/{id}/director-tecnicos', {
    responses: {
      '200': {
        description: 'Torneo.DirectorTecnico DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DirectorTecnico)) where?: Where<DirectorTecnico>,
  ): Promise<Count> {
    return this.torneoRepository.directorTecnicos(id).delete(where);
  }
}
