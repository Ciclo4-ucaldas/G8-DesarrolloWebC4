"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Torneo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const equipo_model_1 = require("./equipo.model");
let Torneo = class Torneo extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Torneo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Torneo.prototype, "Pais", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Torneo.prototype, "NumerodeEquipos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Torneo.prototype, "NumerodeArbitros", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => equipo_model_1.Equipo),
    tslib_1.__metadata("design:type", Array)
], Torneo.prototype, "equipos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Torneo.prototype, "estadioId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Torneo.prototype, "arbitroId", void 0);
Torneo = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Torneo);
exports.Torneo = Torneo;
//# sourceMappingURL=torneo.model.js.map