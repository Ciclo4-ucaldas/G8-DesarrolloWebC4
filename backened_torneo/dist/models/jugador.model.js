"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const equipo_model_1 = require("./equipo.model");
let Jugador = class Jugador extends repository_1.Entity {
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
], Jugador.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "Documento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "EstadoCivil", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "NumeroJugador", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "Sexo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "Posicion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "Eps", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => equipo_model_1.Equipo),
    tslib_1.__metadata("design:type", String)
], Jugador.prototype, "equipoId", void 0);
Jugador = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Jugador);
exports.Jugador = Jugador;
//# sourceMappingURL=jugador.model.js.map