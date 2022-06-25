import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BackEnd rodando Chuchu beleza! http://localhost:3000/docs';
  }
}
