import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Llaves} from '../config/llaves';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const fetch = require('node-fetch');
@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionService {
  envi(destino: string, asunto: string, contenido: string) {
    throw new Error('Method not implemented.');
  }

  constructor(/* Add @inject to inject parameters */) { }

  generarClave() {
    let clave = generador(8, false);
    return clave;
  }

  cifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  notificarEmail(destino: string, asunto: string, contenido: string) {
    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo_destino= ${destino} &asunto= ${asunto} &contenido= ${contenido}`)
      .then((data: any) => {
        console.log(data);
      })
    return true;
  }


  envioMensajeSMS(contenido: string, destino: string) {
    let envio = true
    fetch(Llaves.urlServicioNotificaciones + `sms?message=${contenido}&phone=${destino}`)
      .then((result: any) => {
        console.log(result)
      }).catch((err: any) => {
        console.log(err);
        envio = false;
      });
    return envio;
  }
  /*
 * Add service methods here
 */

}
