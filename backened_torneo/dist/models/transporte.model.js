"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporte = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const equipo_model_1 = require("./equipo.model");
let Transporte = class Transporte extends repository_1.Entity {
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
], Transporte.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Transporte.prototype, "NombreConductor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Transporte.prototype, "Matricula", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => equipo_model_1.Equipo),
    tslib_1.__metadata("design:type", equipo_model_1.Equipo)
], Transporte.prototype, "equipo", void 0);
Transporte = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Transporte);
exports.Transporte = Transporte;
//# sourceMappingURL=transporte.model.js.map