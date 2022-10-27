"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporteEquipoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TransporteEquipoController = class TransporteEquipoController {
    constructor(transporteRepository) {
        this.transporteRepository = transporteRepository;
    }
    async get(id, filter) {
        return this.transporteRepository.equipo(id).get(filter);
    }
    async create(id, equipo) {
        return this.transporteRepository.equipo(id).create(equipo);
    }
    async patch(id, equipo, where) {
        return this.transporteRepository.equipo(id).patch(equipo, where);
    }
    async delete(id, where) {
        return this.transporteRepository.equipo(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/transportes/{id}/equipo', {
        responses: {
            '200': {
                description: 'Transporte has one Equipo',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo),
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
], TransporteEquipoController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/transportes/{id}/equipo', {
        responses: {
            '200': {
                description: 'Transporte model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, {
                    title: 'NewEquipoInTransporte',
                    exclude: ['id'],
                    optional: ['transporteId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteEquipoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/transportes/{id}/equipo', {
        responses: {
            '200': {
                description: 'Transporte.Equipo PATCH success count',
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
], TransporteEquipoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/transportes/{id}/equipo', {
        responses: {
            '200': {
                description: 'Transporte.Equipo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Equipo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteEquipoController.prototype, "delete", null);
TransporteEquipoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TransporteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TransporteRepository])
], TransporteEquipoController);
exports.TransporteEquipoController = TransporteEquipoController;
//# sourceMappingURL=transporte-equipo.controller.js.map