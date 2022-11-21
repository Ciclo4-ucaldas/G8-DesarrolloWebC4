import {service} from '@loopback/core';
import {
  repository
} from '@loopback/repository';
import {
  getModelSchemaRef, HttpErrors, post, requestBody,
  response
} from '@loopback/rest';
import {Credenciales, InicioSession} from '../models';
import {InicioSessionRepository} from '../repositories';
import {AutentificacionService} from '../services';

export class InicioSessionController {
  constructor(
    @repository(InicioSessionRepository)
    public inicioSessionRepository: InicioSessionRepository,
    @service(AutentificacionService)
    public autentificacionService: AutentificacionService
  ) { }

  @post('/identificar-persona')
  @response(200, {
    description: 'InicioSession model instance',
    content: {'application/json': {schema: getModelSchemaRef(InicioSession)}},
  })
  async create(
    @requestBody() credenciales: Credenciales
  ) {
    let p = await this.autentificacionService.identificarPersona(credenciales.usuario, credenciales.clave)
    if (p) {
      let token = this.autentificacionService.GenerarTokenJWT(p, p.constructor.name);
      return {
        datos: {
          nombre: p.Nombres,
          correo: p.usuario,
          id: p.id
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Datos invalidos");
    }
  }


}
