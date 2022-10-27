"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorneoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TorneoController = class TorneoController {
    constructor(torneoRepository) {
        this.torneoRepository = torneoRepository;
    }
    async create(torneo) {
        return this.torneoRepository.create(torneo);
    }
    async count(where) {
        return this.torneoRepository.count(where);
    }
    async find(filter) {
        return this.torneoRepository.find(filter);
    }
    async updateAll(torneo, where) {
        return this.torneoRepository.updateAll(torneo, where);
    }
    async findById(id, filter) {
        return this.torneoRepository.findById(id, filter);
    }
    async updateById(id, torneo) {
        await this.torneoRepository.updateById(id, torneo);
    }
    async replaceById(id, torneo) {
        await this.torneoRepository.replaceById(id, torneo);
    }
    async deleteById(id) {
        await this.torneoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/torneos'),
    (0, rest_1.response)(200, {
        description: 'Torneo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, {
                    title: 'NewTorneo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/torneos/count'),
    (0, rest_1.response)(200, {
        description: 'Torneo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Torneo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/torneos'),
    (0, rest_1.response)(200, {
        description: 'Array of Torneo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Torneo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Torneo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/torneos'),
    (0, rest_1.response)(200, {
        description: 'Torneo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Torneo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Torneo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/torneos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Torneo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Torneo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/torneos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Torneo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Torneo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Torneo]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/torneos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Torneo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Torneo]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/torneos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Torneo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TorneoController.prototype, "deleteById", null);
TorneoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TorneoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TorneoRepository])
], TorneoController);
exports.TorneoController = TorneoController;
//# sourceMappingURL=torneo.controller.js.map