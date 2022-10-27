"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const jugador_model_1 = require("./jugador.model");
let Equipo = class Equipo extends repository_1.Entity {
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
], Equipo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "NombreEquipo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "NumeroJugadores", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "Entrenador", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "Escudo", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => jugador_model_1.Jugador),
    tslib_1.__metadata("design:type", Array)
], Equipo.prototype, "jugadors", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "transporteId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "alojamientoId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Equipo.prototype, "torneoId", void 0);
Equipo = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Equipo);
exports.Equipo = Equipo;
//# sourceMappingURL=equipo.model.js.map