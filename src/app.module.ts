import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { MathService } from './math/math.service';
import { CountModule } from './count/count.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
// import { CountService } from './count/count.service';

@Module({
  imports: [MathModule, 
    CountModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '12345',
      database: 'bookstore',
      entities: [User],
      synchronize: true,
      options: {
        encrypt: true,         // bắt buộc với Azure SQL hoặc có SSL
        trustServerCertificate: true,  // bỏ qua lỗi self-signed
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
