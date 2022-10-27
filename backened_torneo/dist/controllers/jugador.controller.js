"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let JugadorController = class JugadorController {
    constructor(jugadorRepository) {
        this.jugadorRepository = jugadorRepository;
    }
    async create(jugador) {
        return this.jugadorRepository.create(jugador);
    }
    async count(where) {
        return this.jugadorRepository.count(where);
    }
    async find(filter) {
        return this.jugadorRepository.find(filter);
    }
    async updateAll(jugador, where) {
        return this.jugadorRepository.updateAll(jugador, where);
    }
    async findById(id, filter) {
        return this.jugadorRepository.findById(id, filter);
    }
    async updateById(id, jugador) {
        await this.jugadorRepository.updateById(id, jugador);
    }
    async replaceById(id, jugador) {
        await this.jugadorRepository.replaceById(id, jugador);
    }
    async deleteById(id) {
        await this.jugadorRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/jugadors'),
    (0, rest_1.response)(200, {
        description: 'Jugador model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador, {
                    title: 'NewJugador',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/jugadors/count'),
    (0, rest_1.response)(200, {
        description: 'Jugador model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Jugador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/jugadors'),
    (0, rest_1.response)(200, {
        description: 'Array of Jugador model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Jugador, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Jugador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/jugadors'),
    (0, rest_1.response)(200, {
        description: 'Jugador PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Jugador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Jugador, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/jugadors/{id}'),
    (0, rest_1.response)(200, {
        description: 'Jugador model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Jugador, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/jugadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jugador PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Jugador]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/jugadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jugador PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Jugador]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/jugadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jugador DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorController.prototype, "deleteById", null);
JugadorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.JugadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.JugadorRepository])
], JugadorController);
exports.JugadorController = JugadorController;
//# sourceMappingURL=jugador.controller.js.map