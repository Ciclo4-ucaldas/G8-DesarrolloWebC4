"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TransporteController = class TransporteController {
    constructor(transporteRepository) {
        this.transporteRepository = transporteRepository;
    }
    async create(transporte) {
        return this.transporteRepository.create(transporte);
    }
    async count(where) {
        return this.transporteRepository.count(where);
    }
    async find(filter) {
        return this.transporteRepository.find(filter);
    }
    async updateAll(transporte, where) {
        return this.transporteRepository.updateAll(transporte, where);
    }
    async findById(id, filter) {
        return this.transporteRepository.findById(id, filter);
    }
    async updateById(id, transporte) {
        await this.transporteRepository.updateById(id, transporte);
    }
    async replaceById(id, transporte) {
        await this.transporteRepository.replaceById(id, transporte);
    }
    async deleteById(id) {
        await this.transporteRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/transportes'),
    (0, rest_1.response)(200, {
        description: 'Transporte model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Transporte) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transporte, {
                    title: 'NewTransporte',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/transportes/count'),
    (0, rest_1.response)(200, {
        description: 'Transporte model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Transporte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/transportes'),
    (0, rest_1.response)(200, {
        description: 'Array of Transporte model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Transporte, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Transporte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/transportes'),
    (0, rest_1.response)(200, {
        description: 'Transporte PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transporte, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Transporte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Transporte, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/transportes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Transporte model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transporte, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Transporte, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/transportes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Transporte PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Transporte, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Transporte]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/transportes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Transporte PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Transporte]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/transportes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Transporte DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TransporteController.prototype, "deleteById", null);
TransporteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TransporteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TransporteRepository])
], TransporteController);
exports.TransporteController = TransporteController;
//# sourceMappingURL=transporte.controller.js.map