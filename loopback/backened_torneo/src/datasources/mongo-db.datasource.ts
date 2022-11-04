import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoDb',
  connector: 'mongodb',
  url: 'mongodb+srv://maxi23:Programador@torneo0.mtyxggg.mongodb.net/torneoDB?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
