import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloWorldInterceptor } from './helloworld.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(HelloWorldInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
