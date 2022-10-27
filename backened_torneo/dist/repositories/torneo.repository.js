"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorneoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TorneoRepository = class TorneoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, equipoRepositoryGetter) {
        super(models_1.Torneo, dataSource);
        this.equipoRepositoryGetter = equipoRepositoryGetter;
        this.equipos = this.createHasManyRepositoryFactoryFor('equipos', equipoRepositoryGetter);
        this.registerInclusionResolver('equipos', this.equipos.inclusionResolver);
    }
};
TorneoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.MongoDb')),
    tslib_1.__param(1, repository_1.repository.getter('EquipoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function])
], TorneoRepository);
exports.TorneoRepository = TorneoRepository;
//# sourceMappingURL=torneo.repository.js.map