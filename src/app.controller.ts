import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// http://localhost:3000
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // http://localhost:3000/boas-vindas
  @Get('boas-vindas')
  getHello(): string {
    return this.appService.getHello();
  }

  // http://localhost:3000/tchau
  @Get('tchau')
  getGoodbye(): string {
    return this.appService.tchau('Adeus');
  }
}
