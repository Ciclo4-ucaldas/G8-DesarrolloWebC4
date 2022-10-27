"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitroTorneoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArbitroTorneoController = class ArbitroTorneoController {
    constructor(arbitroRepository) {
        this.arbitroRepository = arbitroRepository;
    }
    async find(id, filter) {
        return this.arbitroRepository.torneos(id).find(filter);
    }
    async create(id, torneo) {
        return this.arbitroRepository.torneos(id).create(torneo);
    }
    async patch(id, torneo, where) {
        return this.arbitroRepository.torneos(id).patch(torneo, where);
    }
    async delete(id, where) {
        return this.arbitroRepository.torneos(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/arbitros/{id}/torneos', {
        responses: {
            '200': {
                description: 'Array of Arbitro has many Torneo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Torneo) },
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
], ArbitroTorneoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/arbitros/{id}/torneos', {
        responses: {
            '200': {
                description: 'Arbitro model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, {
                    title: 'NewTorneoInArbitro',
                    exclude: ['id'],
                    optional: ['arbitroId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroTorneoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/arbitros/{id}/torneos', {
        responses: {
            '200': {
                description: 'Arbitro.Torneo PATCH success count',
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
], ArbitroTorneoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/arbitros/{id}/torneos', {
        responses: {
            '200': {
                description: 'Arbitro.Torneo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Torneo))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroTorneoController.prototype, "delete", null);
ArbitroTorneoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ArbitroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArbitroRepository])
], ArbitroTorneoController);
exports.ArbitroTorneoController = ArbitroTorneoController;
//# sourceMappingURL=arbitro-torneo.controller.js.map