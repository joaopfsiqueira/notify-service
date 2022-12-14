import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

//criando repo fake para testar
const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
