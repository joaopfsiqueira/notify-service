import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

//criando array para fake bd
const notifications: Notification[] = [];

//criando repo fake para testar
const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
