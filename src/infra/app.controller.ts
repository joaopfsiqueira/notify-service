import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany(); //connectando à tablea
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    //é dessa forma que pegamos o req.body (express) usando nestjs. Ou melhor, o corpo da requisição. @Body() nomevariavel: tipo
    console.log(body);
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
