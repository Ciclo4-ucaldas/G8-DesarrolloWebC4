"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorneoEquipoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TorneoEquipoController = class TorneoEquipoController {
    constructor(torneoRepository) {
        this.torneoRepository = torneoRepository;
    }
    async find(id, filter) {
        return this.torneoRepository.equipos(id).find(filter);
    }
    async create(id, equipo) {
        return this.torneoRepository.equipos(id).create(equipo);
    }
    async patch(id, equipo, where) {
        return this.torneoRepository.equipos(id).patch(equipo, where);
    }
    async delete(id, where) {
        return this.torneoRepository.equipos(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/torneos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Array of Torneo has many Equipo',
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
], TorneoEquipoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/torneos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Torneo model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, {
                    title: 'NewEquipoInTorneo',
                    exclude: ['id'],
                    optional: ['torneoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoEquipoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/torneos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Torneo.Equipo PATCH success count',
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
], TorneoEquipoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/torneos/{id}/equipos', {
        responses: {
            '200': {
                description: 'Torneo.Equipo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Equipo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoEquipoController.prototype, "delete", null);
TorneoEquipoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TorneoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TorneoRepository])
], TorneoEquipoController);
exports.TorneoEquipoController = TorneoEquipoController;
//# sourceMappingURL=torneo-equipo.controller.js.map