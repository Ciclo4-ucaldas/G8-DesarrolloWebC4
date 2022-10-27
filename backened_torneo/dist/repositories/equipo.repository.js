"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EquipoRepository = class EquipoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, jugadorRepositoryGetter) {
        super(models_1.Equipo, dataSource);
        this.jugadorRepositoryGetter = jugadorRepositoryGetter;
        this.jugadors = this.createHasManyRepositoryFactoryFor('jugadors', jugadorRepositoryGetter);
        this.registerInclusionResolver('jugadors', this.jugadors.inclusionResolver);
    }
};
EquipoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.MongoDb')),
    tslib_1.__param(1, repository_1.repository.getter('JugadorRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDbDataSource, Function])
], EquipoRepository);
exports.EquipoRepository = EquipoRepository;
//# sourceMappingURL=equipo.repository.js.map