import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }),
    ReportModule, ConfigModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
