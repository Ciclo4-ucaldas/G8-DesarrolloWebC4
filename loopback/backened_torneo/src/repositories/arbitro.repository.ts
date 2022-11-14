import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Arbitro, ArbitroRelations, Torneo} from '../models';
import {TorneoRepository} from './torneo.repository';

export class ArbitroRepository extends DefaultCrudRepository<
  Arbitro,
  typeof Arbitro.prototype.id,
  ArbitroRelations
> {

  public readonly torneo: BelongsToAccessor<Torneo, typeof Arbitro.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('TorneoRepository') protected torneoRepositoryGetter: Getter<TorneoRepository>,
  ) {
    super(Arbitro, dataSource);
    this.torneo = this.createBelongsToAccessorFor('torneo', torneoRepositoryGetter,);
    this.registerInclusionResolver('torneo', this.torneo.inclusionResolver);
  }
}
