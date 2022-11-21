import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {InicioSession} from '../models';
import {ArbitroRepository, DirectorTecnicoRepository, JugadorRepository} from '../repositories';
const jwt = require("jsonwebtoken");



@injectable({scope: BindingScope.TRANSIENT})
export class AutentificacionService {
  constructor(
    @repository(DirectorTecnicoRepository)
    public directorTecnicoRepository: DirectorTecnicoRepository,
    @repository(ArbitroRepository)
    public arbitroRepository: ArbitroRepository,
    @repository(JugadorRepository)
    public jugadroRepository: JugadorRepository

  ) { }

  async identificarPersona(usuario: string, Clave: string) {
    try {
      let director = await this.directorTecnicoRepository.findOne({where: {usuario: usuario, clave: Clave}})
      if (director) {
        return director;
      }
      let arbitro = await this.arbitroRepository.findOne({where: {usuario: usuario, clave: Clave}});
      if (arbitro) {
        return arbitro;
      }

      let jugador = await this.jugadroRepository.findOne({where: {usuario: usuario, clave: Clave}});
      if (jugador) {
        return jugador;
      }

    } catch (error) {
      console.log(error);
    }
  }

  GenerarTokenJWT(inicioSession: InicioSession, rol: String) {
    let token = jwt.sign({
      data: {
        id: inicioSession.id,
        Correo: inicioSession.usuario,
        //nombre: inicioSession.Nombres + " " + directorTecnico.Apellidos,
        rol: rol
        // Categoria: directorTecnico.Categoria,
        // TipoDocumento : directorTecnico.TipoDocumento,
        // Documento: directorTecnico.Documento
      }

    },
      Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;

    } catch {
      return false;
    }
  }

}
