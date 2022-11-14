import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Torneo, TorneoRelations, Arbitro} from '../models';
import {ArbitroRepository} from './arbitro.repository';

export class TorneoRepository extends DefaultCrudRepository<
  Torneo,
  typeof Torneo.prototype.id,
  TorneoRelations
> {

  public readonly arbitros: HasManyRepositoryFactory<Arbitro, typeof Torneo.prototype.id>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('ArbitroRepository') protected arbitroRepositoryGetter: Getter<ArbitroRepository>,
  ) {
    super(Torneo, dataSource);
    this.arbitros = this.createHasManyRepositoryFactoryFor('arbitros', arbitroRepositoryGetter,);
    this.registerInclusionResolver('arbitros', this.arbitros.inclusionResolver);
  }
}
