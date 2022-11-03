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
  Torneo,
} from '../models';
import {DirectorTecnicoRepository} from '../repositories';

export class DirectorTecnicoTorneoController {
  constructor(
    @repository(DirectorTecnicoRepository) protected directorTecnicoRepository: DirectorTecnicoRepository,
  ) { }

  @get('/director-tecnicos/{id}/torneo', {
    responses: {
      '200': {
        description: 'DirectorTecnico has one Torneo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Torneo),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Torneo>,
  ): Promise<Torneo> {
    return this.directorTecnicoRepository.torneo(id).get(filter);
  }

  @post('/director-tecnicos/{id}/torneo', {
    responses: {
      '200': {
        description: 'DirectorTecnico model instance',
        content: {'application/json': {schema: getModelSchemaRef(Torneo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DirectorTecnico.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Torneo, {
            title: 'NewTorneoInDirectorTecnico',
            exclude: ['id'],
            optional: ['directorTecnicoId']
          }),
        },
      },
    }) torneo: Omit<Torneo, 'id'>,
  ): Promise<Torneo> {
    return this.directorTecnicoRepository.torneo(id).create(torneo);
  }

  @patch('/director-tecnicos/{id}/torneo', {
    responses: {
      '200': {
        description: 'DirectorTecnico.Torneo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Torneo, {partial: true}),
        },
      },
    })
    torneo: Partial<Torneo>,
    @param.query.object('where', getWhereSchemaFor(Torneo)) where?: Where<Torneo>,
  ): Promise<Count> {
    return this.directorTecnicoRepository.torneo(id).patch(torneo, where);
  }

  @del('/director-tecnicos/{id}/torneo', {
    responses: {
      '200': {
        description: 'DirectorTecnico.Torneo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Torneo)) where?: Where<Torneo>,
  ): Promise<Count> {
    return this.directorTecnicoRepository.torneo(id).delete(where);
  }
}
