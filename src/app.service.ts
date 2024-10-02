import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    return ["iniciando despliegue","se cambio el puerto de 5000 a 8000","actualizando el package.json","retornando"];
  }
}
