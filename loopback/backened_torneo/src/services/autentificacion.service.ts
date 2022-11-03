import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { DirectorTecnico } from '../models';
import { DirectorTecnicoRepository } from '../repositories';
import { Llaves } from '../config/llaves';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



@injectable({scope: BindingScope.TRANSIENT})
export class AutentificacionService {
  constructor(
    @repository(DirectorTecnicoRepository) 
    public directorTecnicoRepository: DirectorTecnicoRepository
  ){}
  generarClave(){
    let clave = generador(8, false);
    return clave;
  }
  
  cifrarClave(clave: string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }
  
  
  IdentificarDirectorTecnico(usuario: string, Clave: string){
    try{
      let p = this.directorTecnicoRepository.findOne({where:{Correo: usuario, Clave: Clave}});
       if(p){
               return p;
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
      nombre: directorTecnico.Nombres + " " + directorTecnico.Apellidos
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
      let datos = jwt.veryfy(token, Llaves.claveJWT);
      return datos;
  
    }catch{
      return false;
   }
}

}
