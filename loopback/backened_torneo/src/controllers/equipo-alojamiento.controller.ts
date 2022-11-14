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
  Alojamiento,
} from '../models';
import {EquipoRepository} from '../repositories';

export class EquipoAlojamientoController {
  constructor(
    @repository(EquipoRepository) protected equipoRepository: EquipoRepository,
  ) { }

  @get('/equipos/{id}/alojamientos', {
    responses: {
      '200': {
        description: 'Array of Equipo has many Alojamiento',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Alojamiento)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Alojamiento>,
  ): Promise<Alojamiento[]> {
    return this.equipoRepository.alojamientos(id).find(filter);
  }

  @post('/equipos/{id}/alojamientos', {
    responses: {
      '200': {
        description: 'Equipo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Alojamiento)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Equipo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alojamiento, {
            title: 'NewAlojamientoInEquipo',
            exclude: ['id'],
            optional: ['equipoId']
          }),
        },
      },
    }) alojamiento: Omit<Alojamiento, 'id'>,
  ): Promise<Alojamiento> {
    return this.equipoRepository.alojamientos(id).create(alojamiento);
  }

  @patch('/equipos/{id}/alojamientos', {
    responses: {
      '200': {
        description: 'Equipo.Alojamiento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alojamiento, {partial: true}),
        },
      },
    })
    alojamiento: Partial<Alojamiento>,
    @param.query.object('where', getWhereSchemaFor(Alojamiento)) where?: Where<Alojamiento>,
  ): Promise<Count> {
    return this.equipoRepository.alojamientos(id).patch(alojamiento, where);
  }

  @del('/equipos/{id}/alojamientos', {
    responses: {
      '200': {
        description: 'Equipo.Alojamiento DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Alojamiento)) where?: Where<Alojamiento>,
  ): Promise<Count> {
    return this.equipoRepository.alojamientos(id).delete(where);
  }
}
