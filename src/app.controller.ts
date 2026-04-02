import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api') // Moved to /api so it doesn't conflict with your frontend
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}