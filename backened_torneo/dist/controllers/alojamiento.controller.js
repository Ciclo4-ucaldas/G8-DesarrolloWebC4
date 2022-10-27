"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlojamientoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AlojamientoController = class AlojamientoController {
    constructor(alojamientoRepository) {
        this.alojamientoRepository = alojamientoRepository;
    }
    async create(alojamiento) {
        return this.alojamientoRepository.create(alojamiento);
    }
    async count(where) {
        return this.alojamientoRepository.count(where);
    }
    async find(filter) {
        return this.alojamientoRepository.find(filter);
    }
    async updateAll(alojamiento, where) {
        return this.alojamientoRepository.updateAll(alojamiento, where);
    }
    async findById(id, filter) {
        return this.alojamientoRepository.findById(id, filter);
    }
    async updateById(id, alojamiento) {
        await this.alojamientoRepository.updateById(id, alojamiento);
    }
    async replaceById(id, alojamiento) {
        await this.alojamientoRepository.replaceById(id, alojamiento);
    }
    async deleteById(id) {
        await this.alojamientoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/alojamientos'),
    (0, rest_1.response)(200, {
        description: 'Alojamiento model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Alojamiento) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alojamiento, {
                    title: 'NewAlojamiento',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alojamientos/count'),
    (0, rest_1.response)(200, {
        description: 'Alojamiento model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Alojamiento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alojamientos'),
    (0, rest_1.response)(200, {
        description: 'Array of Alojamiento model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Alojamiento, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Alojamiento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alojamientos'),
    (0, rest_1.response)(200, {
        description: 'Alojamiento PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alojamiento, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Alojamiento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Alojamiento, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alojamientos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Alojamiento model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alojamiento, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Alojamiento, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alojamientos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alojamiento PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alojamiento, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Alojamiento]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/alojamientos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alojamiento PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Alojamiento]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/alojamientos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alojamiento DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlojamientoController.prototype, "deleteById", null);
AlojamientoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AlojamientoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AlojamientoRepository])
], AlojamientoController);
exports.AlojamientoController = AlojamientoController;
//# sourceMappingURL=alojamiento.controller.js.map