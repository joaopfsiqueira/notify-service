import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller('app')
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get('hello')
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
