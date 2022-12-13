import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark.mail.service';
import { SMTPMailService } from './mail/smtp.mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostmarkMailService,
    },
  ],
})
export class AppModule {}
