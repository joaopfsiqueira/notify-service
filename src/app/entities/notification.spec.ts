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
  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(); //.repeat é um método js que pega a string e repete ela pelo numero de vezes.
  });
});
