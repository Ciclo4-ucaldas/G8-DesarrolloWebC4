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
  Transporte,
} from '../models';
import {EquipoRepository} from '../repositories';

export class EquipoTransporteController {
  constructor(
    @repository(EquipoRepository) protected equipoRepository: EquipoRepository,
  ) { }

  @get('/equipos/{id}/transportes', {
    responses: {
      '200': {
        description: 'Array of Equipo has many Transporte',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Transporte)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Transporte>,
  ): Promise<Transporte[]> {
    return this.equipoRepository.transportes(id).find(filter);
  }

  @post('/equipos/{id}/transportes', {
    responses: {
      '200': {
        description: 'Equipo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transporte)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Equipo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transporte, {
            title: 'NewTransporteInEquipo',
            exclude: ['id'],
            optional: ['equipoId']
          }),
        },
      },
    }) transporte: Omit<Transporte, 'id'>,
  ): Promise<Transporte> {
    return this.equipoRepository.transportes(id).create(transporte);
  }

  @patch('/equipos/{id}/transportes', {
    responses: {
      '200': {
        description: 'Equipo.Transporte PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transporte, {partial: true}),
        },
      },
    })
    transporte: Partial<Transporte>,
    @param.query.object('where', getWhereSchemaFor(Transporte)) where?: Where<Transporte>,
  ): Promise<Count> {
    return this.equipoRepository.transportes(id).patch(transporte, where);
  }

  @del('/equipos/{id}/transportes', {
    responses: {
      '200': {
        description: 'Equipo.Transporte DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Transporte)) where?: Where<Transporte>,
  ): Promise<Count> {
    return this.equipoRepository.transportes(id).delete(where);
  }
}
