"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadioTorneoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstadioTorneoController = class EstadioTorneoController {
    constructor(estadioRepository) {
        this.estadioRepository = estadioRepository;
    }
    async get(id, filter) {
        return this.estadioRepository.torneo(id).get(filter);
    }
    async create(id, torneo) {
        return this.estadioRepository.torneo(id).create(torneo);
    }
    async patch(id, torneo, where) {
        return this.estadioRepository.torneo(id).patch(torneo, where);
    }
    async delete(id, where) {
        return this.estadioRepository.torneo(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/estadios/{id}/torneo', {
        responses: {
            '200': {
                description: 'Estadio has one Torneo',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo),
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
], EstadioTorneoController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/estadios/{id}/torneo', {
        responses: {
            '200': {
                description: 'Estadio model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, {
                    title: 'NewTorneoInEstadio',
                    exclude: ['id'],
                    optional: ['estadioId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioTorneoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estadios/{id}/torneo', {
        responses: {
            '200': {
                description: 'Estadio.Torneo PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Torneo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioTorneoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/estadios/{id}/torneo', {
        responses: {
            '200': {
                description: 'Estadio.Torneo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Torneo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioTorneoController.prototype, "delete", null);
EstadioTorneoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EstadioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EstadioRepository])
], EstadioTorneoController);
exports.EstadioTorneoController = EstadioTorneoController;
//# sourceMappingURL=estadio-torneo.controller.js.map