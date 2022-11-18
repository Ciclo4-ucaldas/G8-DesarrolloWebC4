import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response
} from '@loopback/rest';
import {Credenciales, DirectorTecnico} from '../models';
import {DirectorTecnicoRepository} from '../repositories';


export class DirectorTecnicoController {
  servicioAutenticacion: any;
  constructor(
    @repository(DirectorTecnicoRepository)
    public directorTecnicoRepository: DirectorTecnicoRepository,
  ) { }

  @post('/tecnico', {
    responses: {
      '200': {
        description: "Identificación de Técnico"

      }
    }
  }
  )
  async identificarTecnico(
    @requestBody() credenciales: Credenciales
  ) {
    let d = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave)
    if (d) {
      ;
      let token = this.servicioAutenticacion.GenerarTokenJWT(d);
      return {
        datos: {
          nombre: d.nombre,
          correo: d.correo,
          id: d.id
        },
        tk: token
      }
    } else {
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

    let clave = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.cifrarClave(clave);
    directorTecnico.clave = claveCifrada;
    let d = await this.directorTecnicoRepository.create(directorTecnico);
    return d;

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
function fetch(arg0: string) {
  throw new Error('Function not implemented.');
}

