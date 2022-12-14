import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    //é dessa forma que pegamos o req.body (express) usando nestjs. Ou melhor, o corpo da requisição. @Body() nomevariavel: tipo
    console.log(body);
    const { recipientId, content, category } = body;
  }
}
