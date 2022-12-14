import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { HttpErrors, Request } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import parseBearerToken from "parse-bearer-token";
import { AutentificacionService } from "../services";


export class EstrategiaAdministrador implements AuthenticationStrategy{
    name: string = 'tecnico'


constructor(
    @service(AutentificacionService)
    public servicioAutenticacion:AutentificacionService
){

}
    async authenticate(request: Request): Promise<UserProfile | undefined> {
        let token = parseBearerToken(request);
        if(token){
            let datos = this.servicioAutenticacion.ValidarTokenJWT(token);
            if(datos.data.rol=="DirectorTecnico"){
                let perfil: UserProfile = Object.assign({
                nombre: datos.data.Nombres,
                rol:datos.rol
                });
                return perfil;
            }else{
                throw new HttpErrors[401] ("el token incluido no es valido");
            }
        }else{
            throw new HttpErrors[401] ("No se ha solicitado un token en la solicitud");
        }
    }
}
