"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstadioController = class EstadioController {
    constructor(estadioRepository) {
        this.estadioRepository = estadioRepository;
    }
    async create(estadio) {
        return this.estadioRepository.create(estadio);
    }
    async count(where) {
        return this.estadioRepository.count(where);
    }
    async find(filter) {
        return this.estadioRepository.find(filter);
    }
    async updateAll(estadio, where) {
        return this.estadioRepository.updateAll(estadio, where);
    }
    async findById(id, filter) {
        return this.estadioRepository.findById(id, filter);
    }
    async updateById(id, estadio) {
        await this.estadioRepository.updateById(id, estadio);
    }
    async replaceById(id, estadio) {
        await this.estadioRepository.replaceById(id, estadio);
    }
    async deleteById(id) {
        await this.estadioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/estadios'),
    (0, rest_1.response)(200, {
        description: 'Estadio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estadio) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadio, {
                    title: 'NewEstadio',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estadios/count'),
    (0, rest_1.response)(200, {
        description: 'Estadio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Estadio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estadios'),
    (0, rest_1.response)(200, {
        description: 'Array of Estadio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Estadio, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Estadio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estadios'),
    (0, rest_1.response)(200, {
        description: 'Estadio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Estadio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Estadio, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estadios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Estadio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadio, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Estadio, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estadios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estadio PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estadio, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Estadio]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/estadios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estadio PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Estadio]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/estadios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estadio DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadioController.prototype, "deleteById", null);
EstadioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EstadioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EstadioRepository])
], EstadioController);
exports.EstadioController = EstadioController;
//# sourceMappingURL=estadio.controller.js.map