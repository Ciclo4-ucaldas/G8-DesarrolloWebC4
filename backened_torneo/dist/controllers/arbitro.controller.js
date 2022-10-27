"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArbitroController = class ArbitroController {
    constructor(arbitroRepository) {
        this.arbitroRepository = arbitroRepository;
    }
    async create(arbitro) {
        return this.arbitroRepository.create(arbitro);
    }
    async count(where) {
        return this.arbitroRepository.count(where);
    }
    async find(filter) {
        return this.arbitroRepository.find(filter);
    }
    async updateAll(arbitro, where) {
        return this.arbitroRepository.updateAll(arbitro, where);
    }
    async findById(id, filter) {
        return this.arbitroRepository.findById(id, filter);
    }
    async updateById(id, arbitro) {
        await this.arbitroRepository.updateById(id, arbitro);
    }
    async replaceById(id, arbitro) {
        await this.arbitroRepository.replaceById(id, arbitro);
    }
    async deleteById(id) {
        await this.arbitroRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/arbitros'),
    (0, rest_1.response)(200, {
        description: 'Arbitro model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Arbitro) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Arbitro, {
                    title: 'NewArbitro',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/arbitros/count'),
    (0, rest_1.response)(200, {
        description: 'Arbitro model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Arbitro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/arbitros'),
    (0, rest_1.response)(200, {
        description: 'Array of Arbitro model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Arbitro, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Arbitro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/arbitros'),
    (0, rest_1.response)(200, {
        description: 'Arbitro PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Arbitro, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Arbitro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Arbitro, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/arbitros/{id}'),
    (0, rest_1.response)(200, {
        description: 'Arbitro model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Arbitro, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Arbitro, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/arbitros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Arbitro PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Arbitro, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Arbitro]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/arbitros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Arbitro PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Arbitro]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/arbitros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Arbitro DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ArbitroController.prototype, "deleteById", null);
ArbitroController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ArbitroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArbitroRepository])
], ArbitroController);
exports.ArbitroController = ArbitroController;
//# sourceMappingURL=arbitro.controller.js.map