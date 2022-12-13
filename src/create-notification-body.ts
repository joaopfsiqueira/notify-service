import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty() //dizendo que recipient id não pode estar vazio, tratando o erro caso ele venha vazio
  @IsUUID() // dizendo que precisa ser um UUID
  recipientId: string;

  @IsNotEmpty() //dizendo que recipient id não pode estar vazio, tratando o erro caso ele venha vazio
  @Length(5, 240) //definindo limite minimo e maximo.
  content: string;

  category: string;
}
