import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá mundo!';
  }

  tchau(mensagem: string): string {
    return mensagem;
  }
}
