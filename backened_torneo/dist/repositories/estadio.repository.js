"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EstadioRepository = class EstadioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, torneoRepositoryGetter) {
        super(models_1.Estadio, dataSource);
        this.torneoRepositoryGetter = torneoRepositoryGetter;
        this.torneo = this.createHasOneRepositoryFactoryFor('torneo', torneoRepositoryGetter);
        this.registerInclusionResolver('torneo', this.torneo.inclusionResolver);
    }
};
EstadioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.MongoDb')),
    tslib_1.__param(1, repository_1.repository.getter('TorneoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function])
], EstadioRepository);
exports.EstadioRepository = EstadioRepository;
//# sourceMappingURL=estadio.repository.js.map