import { Content } from './content';
import { Notification } from './notification';

describe('Notifcation', () => {
  it('should be able to create a notification ', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
