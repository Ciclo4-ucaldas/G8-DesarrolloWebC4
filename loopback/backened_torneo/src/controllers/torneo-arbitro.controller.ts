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
  Arbitro,
} from '../models';
import {TorneoRepository} from '../repositories';

export class TorneoArbitroController {
  constructor(
    @repository(TorneoRepository) protected torneoRepository: TorneoRepository,
  ) { }

  @get('/torneos/{id}/arbitros', {
    responses: {
      '200': {
        description: 'Array of Torneo has many Arbitro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Arbitro)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Arbitro>,
  ): Promise<Arbitro[]> {
    return this.torneoRepository.arbitros(id).find(filter);
  }

  @post('/torneos/{id}/arbitros', {
    responses: {
      '200': {
        description: 'Torneo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Arbitro)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Torneo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Arbitro, {
            title: 'NewArbitroInTorneo',
            exclude: ['id'],
            optional: ['torneoId']
          }),
        },
      },
    }) arbitro: Omit<Arbitro, 'id'>,
  ): Promise<Arbitro> {
    return this.torneoRepository.arbitros(id).create(arbitro);
  }

  @patch('/torneos/{id}/arbitros', {
    responses: {
      '200': {
        description: 'Torneo.Arbitro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Arbitro, {partial: true}),
        },
      },
    })
    arbitro: Partial<Arbitro>,
    @param.query.object('where', getWhereSchemaFor(Arbitro)) where?: Where<Arbitro>,
  ): Promise<Count> {
    return this.torneoRepository.arbitros(id).patch(arbitro, where);
  }

  @del('/torneos/{id}/arbitros', {
    responses: {
      '200': {
        description: 'Torneo.Arbitro DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Arbitro)) where?: Where<Arbitro>,
  ): Promise<Count> {
    return this.torneoRepository.arbitros(id).delete(where);
  }
}
