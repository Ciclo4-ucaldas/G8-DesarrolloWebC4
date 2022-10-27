"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoJugadorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EquipoJugadorController = class EquipoJugadorController {
    constructor(equipoRepository) {
        this.equipoRepository = equipoRepository;
    }
    async find(id, filter) {
        return this.equipoRepository.jugadors(id).find(filter);
    }
    async create(id, jugador) {
        return this.equipoRepository.jugadors(id).create(jugador);
    }
    async patch(id, jugador, where) {
        return this.equipoRepository.jugadors(id).patch(jugador, where);
    }
    async delete(id, where) {
        return this.equipoRepository.jugadors(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/equipos/{id}/jugadors', {
        responses: {
            '200': {
                description: 'Array of Equipo has many Jugador',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Jugador) },
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
], EquipoJugadorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/equipos/{id}/jugadors', {
        responses: {
            '200': {
                description: 'Equipo model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador, {
                    title: 'NewJugadorInEquipo',
                    exclude: ['id'],
                    optional: ['equipoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoJugadorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/equipos/{id}/jugadors', {
        responses: {
            '200': {
                description: 'Equipo.Jugador PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jugador, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Jugador))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoJugadorController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/equipos/{id}/jugadors', {
        responses: {
            '200': {
                description: 'Equipo.Jugador DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Jugador))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EquipoJugadorController.prototype, "delete", null);
EquipoJugadorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EquipoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EquipoRepository])
], EquipoJugadorController);
exports.EquipoJugadorController = EquipoJugadorController;
//# sourceMappingURL=equipo-jugador.controller.js.map