import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
