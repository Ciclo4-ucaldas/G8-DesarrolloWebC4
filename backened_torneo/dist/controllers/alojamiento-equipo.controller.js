"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlojamientoEquipoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AlojamientoEquipoController = class AlojamientoEquipoController {
    constructor(alojamientoRepository) {
        this.alojamientoRepository = alojamientoRepository;
    }
    async find(id, filter) {
        return this.alojamientoRepository.equipos(id).find(filter);
    }
    async create(id, equipo) {
        return this.alojamientoRepository.equipos(id).create(equipo);
    }
    async patch(id, equipo, where) {
        return this.alojamientoRepository.equipos(id).patch(equipo, where);
    }
    async delete(id, where) {
        return this.alojamientoRepository.equipos(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/alojamientos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Array of Alojamiento has many Equipo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Equipo) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoEquipoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/alojamientos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Alojamiento model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, {
                    title: 'NewEquipoInAlojamiento',
                    exclude: ['id'],
                    optional: ['alojamientoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoEquipoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alojamientos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Alojamiento.Equipo PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Equipo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoEquipoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/alojamientos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Alojamiento.Equipo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Equipo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoEquipoController.prototype, "delete", null);
AlojamientoEquipoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AlojamientoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AlojamientoRepository])
], AlojamientoEquipoController);
exports.AlojamientoEquipoController = AlojamientoEquipoController;
//# sourceMappingURL=alojamiento-equipo.controller.js.map