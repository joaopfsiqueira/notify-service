import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  //tudo o que tiver de providers é injeção de dependências.
  providers: [SendNotification],
})
export class HttpModule {}
