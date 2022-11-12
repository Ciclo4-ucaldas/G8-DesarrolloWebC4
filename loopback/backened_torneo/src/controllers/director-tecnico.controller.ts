import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import { Llaves } from '../config/llaves';
import {Credenciales, DirectorTecnico} from '../models';
import {DirectorTecnicoRepository} from '../repositories';
import { AutentificacionService } from '../services';
const fetch = require('node-fetch');

export class DirectorTecnicoController {
  constructor(
    @repository(DirectorTecnicoRepository)
    public directorTecnicoRepository : DirectorTecnicoRepository,
    @service(AutentificacionService)
    public servicioAutenticacion: AutentificacionService

  ) {}
  @post('/IdentificarDirectorTecnico', {
    responses: {
      '200':{
      description: "Identificación de Usuarios"
  
     } 
    }
  })
  async IdentificarDirectorTecnico(
    @requestBody() credenciales: Credenciales
  )
  {
    let d = await this.servicioAutenticacion.IdentificarDirectorTecnico(credenciales.usuario, credenciales.clave)
    if (d){;
      let token = this.servicioAutenticacion.GenerarTokenJWT(d);
      return{
        datos:{
          id: d.id,
          nombre: d.Nombres,
          correo: d.Correo
          
      },
      tk: token
    }
    }else{
      throw new HttpErrors[401]("Datos invalidos");
    }
  }

  @post('/director-tecnicos')
  @response(200, {
    description: 'DirectorTecnico model instance',
    content: {'application/json': {schema: getModelSchemaRef(DirectorTecnico)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DirectorTecnico, {
            title: 'NewDirectorTecnico',
            exclude: ['id'],
          }),
        },
      },
    })
    directorTecnico: Omit<DirectorTecnico, 'id'>,
  ): Promise<DirectorTecnico> {

    let clave = this.servicioAutenticacion.generarClave();
    let claveCifrada = this.servicioAutenticacion.cifrarClave(clave);
    directorTecnico.Clave = claveCifrada;
    let p = await this.directorTecnicoRepository.create(directorTecnico);

    //Notificar al usuario
    const destino = directorTecnico.Correo;
    const asunto = 'Registro en la plataforma';
    const contenido = `Hola ${directorTecnico.Nombres}, su nombre de usuario es: ${directorTecnico.Correo} y su contraseña es: ${clave}`;
    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
    .then((data:any) => {
      console.log(data);
    })
    return p;

  }

  @get('/director-tecnicos/count')
  @response(200, {
    description: 'DirectorTecnico model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DirectorTecnico) where?: Where<DirectorTecnico>,
  ): Promise<Count> {
    return this.directorTecnicoRepository.count(where);
  }

  @get('/director-tecnicos')
  @response(200, {
    description: 'Array of DirectorTecnico model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DirectorTecnico, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DirectorTecnico) filter?: Filter<DirectorTecnico>,
  ): Promise<DirectorTecnico[]> {
    return this.directorTecnicoRepository.find(filter);
  }

  @patch('/director-tecnicos')
  @response(200, {
    description: 'DirectorTecnico PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DirectorTecnico, {partial: true}),
        },
      },
    })
    directorTecnico: DirectorTecnico,
    @param.where(DirectorTecnico) where?: Where<DirectorTecnico>,
  ): Promise<Count> {
    return this.directorTecnicoRepository.updateAll(directorTecnico, where);
  }

  @get('/director-tecnicos/{id}')
  @response(200, {
    description: 'DirectorTecnico model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DirectorTecnico, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DirectorTecnico, {exclude: 'where'}) filter?: FilterExcludingWhere<DirectorTecnico>
  ): Promise<DirectorTecnico> {
    return this.directorTecnicoRepository.findById(id, filter);
  }

  @patch('/director-tecnicos/{id}')
  @response(204, {
    description: 'DirectorTecnico PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DirectorTecnico, {partial: true}),
        },
      },
    })
    directorTecnico: DirectorTecnico,
  ): Promise<void> {
    await this.directorTecnicoRepository.updateById(id, directorTecnico);
  }

  @put('/director-tecnicos/{id}')
  @response(204, {
    description: 'DirectorTecnico PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() directorTecnico: DirectorTecnico,
  ): Promise<void> {
    await this.directorTecnicoRepository.replaceById(id, directorTecnico);
  }

  @del('/director-tecnicos/{id}')
  @response(204, {
    description: 'DirectorTecnico DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.directorTecnicoRepository.deleteById(id);
  }
}
