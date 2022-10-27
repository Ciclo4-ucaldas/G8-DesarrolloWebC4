"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estadio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const torneo_model_1 = require("./torneo.model");
let Estadio = class Estadio extends repository_1.Entity {
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
], Estadio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Estadio.prototype, "Nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Estadio.prototype, "Capacidad", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => torneo_model_1.Torneo),
    tslib_1.__metadata("design:type", torneo_model_1.Torneo)
], Estadio.prototype, "torneo", void 0);
Estadio = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Estadio);
exports.Estadio = Estadio;
//# sourceMappingURL=estadio.model.js.map