"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TransporteRepository = class TransporteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, equipoRepositoryGetter) {
        super(models_1.Transporte, dataSource);
        this.equipoRepositoryGetter = equipoRepositoryGetter;
        this.equipo = this.createHasOneRepositoryFactoryFor('equipo', equipoRepositoryGetter);
        this.registerInclusionResolver('equipo', this.equipo.inclusionResolver);
    }
};
TransporteRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.MongoDb')),
    tslib_1.__param(1, repository_1.repository.getter('EquipoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function])
], TransporteRepository);
exports.TransporteRepository = TransporteRepository;
//# sourceMappingURL=transporte.repository.js.map