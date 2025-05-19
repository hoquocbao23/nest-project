import { Controller, Get } from '@nestjs/common';

import { MathService } from './math/math.service';
import { CountService } from './count/count.service';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly mathService: MathService, 
              private readonly countService: CountService,
              private readonly appService: AppService) {}

  @Get()
  getHello(): number {
     return this.countService.doubleIncrement();
     
  }
}
