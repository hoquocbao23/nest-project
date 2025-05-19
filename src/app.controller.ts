import { Controller, Get } from '@nestjs/common';

import { MathService } from './math/math.service';
import { CountService } from './count/count.service';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Repository } from 'typeorm';


@Controller()
export class AppController {
  constructor(private readonly mathService: MathService, 
              private readonly countService: CountService,
              private readonly appService: AppService,

            // Kh
            @InjectRepository(User)
            private userRepository: Repository<User>) {}

  @Get()
  getHello() {
     return this.userRepository.find() ;
     
  }
}
