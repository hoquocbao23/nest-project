import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { MathService } from './math/math.service';
import { CountModule } from './count/count.module';
// import { CountService } from './count/count.service';

@Module({
  imports: [MathModule, CountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
