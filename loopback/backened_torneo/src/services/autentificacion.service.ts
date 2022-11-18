import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { DirectorTecnico } from '../models';
import { DirectorTecnicoRepository } from '../repositories';
import { Llaves } from '../config/llaves';
const jwt = require("jsonwebtoken");



@injectable({scope: BindingScope.TRANSIENT})
export class AutentificacionService {
  constructor(
    @repository(DirectorTecnicoRepository)
    public directorTecnicoRepository: DirectorTecnicoRepository
  ){}



  IdentificarDirectorTecnico(usuario: string, Clave: string){
    try{
      let d = this.directorTecnicoRepository.findOne({where:{Correo: usuario, clave: Clave}});
       if(d){
               return d;
           }
           return false;

       }catch{

           return false;
         }
      }

  GenerarTokenJWT(directorTecnico: DirectorTecnico){
    let token = jwt.sign({
      data:{
      id: directorTecnico.id,
      Correo: directorTecnico.Correo,
      nombre: directorTecnico.Nombres + " " + directorTecnico.Apellidos,
      rol:directorTecnico.constructor.name
      // Categoria: directorTecnico.Categoria,
      // TipoDocumento : directorTecnico.TipoDocumento,
      // Documento: directorTecnico.Documento
    }

  },
      Llaves.claveJWT);
      return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;

    }catch{
      return false;
   }
}

}
