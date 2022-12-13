import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SMTPMailService } from './mail/smtp.mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SMTPMailService],
})
export class AppModule {}
