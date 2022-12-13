import { IsNotEmpty } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty() //dizendo que recipient id não pode estar vazio, tratando o erro caso ele venha vazio
  recipientId: string;

  content: string;
  category: string;
}
