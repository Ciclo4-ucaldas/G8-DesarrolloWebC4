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
  Estadio,
} from '../models';
import {TorneoRepository} from '../repositories';

export class TorneoEstadioController {
  constructor(
    @repository(TorneoRepository) protected torneoRepository: TorneoRepository,
  ) { }

  @get('/torneos/{id}/estadios', {
    responses: {
      '200': {
        description: 'Array of Torneo has many Estadio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estadio)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Estadio>,
  ): Promise<Estadio[]> {
    return this.torneoRepository.estadios(id).find(filter);
  }

  @post('/torneos/{id}/estadios', {
    responses: {
      '200': {
        description: 'Torneo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Estadio)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Torneo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadio, {
            title: 'NewEstadioInTorneo',
            exclude: ['id'],
            optional: ['torneoId']
          }),
        },
      },
    }) estadio: Omit<Estadio, 'id'>,
  ): Promise<Estadio> {
    return this.torneoRepository.estadios(id).create(estadio);
  }

  @patch('/torneos/{id}/estadios', {
    responses: {
      '200': {
        description: 'Torneo.Estadio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadio, {partial: true}),
        },
      },
    })
    estadio: Partial<Estadio>,
    @param.query.object('where', getWhereSchemaFor(Estadio)) where?: Where<Estadio>,
  ): Promise<Count> {
    return this.torneoRepository.estadios(id).patch(estadio, where);
  }

  @del('/torneos/{id}/estadios', {
    responses: {
      '200': {
        description: 'Torneo.Estadio DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Estadio)) where?: Where<Estadio>,
  ): Promise<Count> {
    return this.torneoRepository.estadios(id).delete(where);
  }
}
