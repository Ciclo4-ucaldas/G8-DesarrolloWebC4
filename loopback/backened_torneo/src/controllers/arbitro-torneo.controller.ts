import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Arbitro,
  Torneo,
} from '../models';
import {ArbitroRepository} from '../repositories';

export class ArbitroTorneoController {
  constructor(
    @repository(ArbitroRepository)
    public arbitroRepository: ArbitroRepository,
  ) { }

  @get('/arbitros/{id}/torneo', {
    responses: {
      '200': {
        description: 'Torneo belonging to Arbitro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Torneo)},
          },
        },
      },
    },
  })
  async getTorneo(
    @param.path.string('id') id: typeof Arbitro.prototype.id,
  ): Promise<Torneo> {
    return this.arbitroRepository.torneo(id);
  }
}
