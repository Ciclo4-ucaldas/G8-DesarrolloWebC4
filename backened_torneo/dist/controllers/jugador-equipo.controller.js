"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadorEquipoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let JugadorEquipoController = class JugadorEquipoController {
    constructor(jugadorRepository) {
        this.jugadorRepository = jugadorRepository;
    }
    async getEquipo(id) {
        return this.jugadorRepository.equipo(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/jugadors/{id}/equipo', {
        responses: {
            '200': {
                description: 'Equipo belonging to Jugador',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Equipo) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JugadorEquipoController.prototype, "getEquipo", null);
JugadorEquipoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.JugadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.JugadorRepository])
], JugadorEquipoController);
exports.JugadorEquipoController = JugadorEquipoController;
//# sourceMappingURL=jugador-equipo.controller.js.map