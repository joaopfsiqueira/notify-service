import { MailService } from './mail.service';

export class PostmarkMailService implements MailService {
  sendEmail(): string {
    return 'Postmark!';
  }
}
