"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alojamiento = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const equipo_model_1 = require("./equipo.model");
let Alojamiento = class Alojamiento extends repository_1.Entity {
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
], Alojamiento.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Alojamiento.prototype, "NombreAlojamiento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Alojamiento.prototype, "Ubicacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Alojamiento.prototype, "NumerodeHabitaciones", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => equipo_model_1.Equipo),
    tslib_1.__metadata("design:type", Array)
], Alojamiento.prototype, "equipos", void 0);
Alojamiento = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Alojamiento);
exports.Alojamiento = Alojamiento;
//# sourceMappingURL=alojamiento.model.js.map