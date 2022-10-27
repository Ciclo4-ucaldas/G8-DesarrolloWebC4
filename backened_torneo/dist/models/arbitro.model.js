"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arbitro = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const torneo_model_1 = require("./torneo.model");
let Arbitro = class Arbitro extends repository_1.Entity {
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
], Arbitro.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Arbitro.prototype, "Nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Arbitro.prototype, "LicenciaArbitro", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Arbitro.prototype, "Telefono", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => torneo_model_1.Torneo),
    tslib_1.__metadata("design:type", Array)
], Arbitro.prototype, "torneos", void 0);
Arbitro = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Arbitro);
exports.Arbitro = Arbitro;
//# sourceMappingURL=arbitro.model.js.map