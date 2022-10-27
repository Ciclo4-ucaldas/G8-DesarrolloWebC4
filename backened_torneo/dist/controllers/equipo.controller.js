"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EquipoController = class EquipoController {
    constructor(equipoRepository) {
        this.equipoRepository = equipoRepository;
    }
    async create(equipo) {
        return this.equipoRepository.create(equipo);
    }
    async count(where) {
        return this.equipoRepository.count(where);
    }
    async find(filter) {
        return this.equipoRepository.find(filter);
    }
    async updateAll(equipo, where) {
        return this.equipoRepository.updateAll(equipo, where);
    }
    async findById(id, filter) {
        return this.equipoRepository.findById(id, filter);
    }
    async updateById(id, equipo) {
        await this.equipoRepository.updateById(id, equipo);
    }
    async replaceById(id, equipo) {
        await this.equipoRepository.replaceById(id, equipo);
    }
    async deleteById(id) {
        await this.equipoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/equipos'),
    (0, rest_1.response)(200, {
        description: 'Equipo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, {
                    title: 'NewEquipo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/equipos/count'),
    (0, rest_1.response)(200, {
        description: 'Equipo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Equipo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/equipos'),
    (0, rest_1.response)(200, {
        description: 'Array of Equipo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Equipo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Equipo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/equipos'),
    (0, rest_1.response)(200, {
        description: 'Equipo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Equipo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Equipo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/equipos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Equipo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Equipo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/equipos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Equipo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Equipo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Equipo]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/equipos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Equipo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Equipo]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/equipos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Equipo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoController.prototype, "deleteById", null);
EquipoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EquipoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EquipoRepository])
], EquipoController);
exports.EquipoController = EquipoController;
//# sourceMappingURL=equipo.controller.js.map