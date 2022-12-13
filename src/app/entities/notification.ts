export interface NotificationProps {
  content: string;
  category: string;
}

export class Notification {
  private content: string;
  private category: string;

  construct() {
    this.content = '';
  }

  public set(content: string) {
    if (content.length < 5) {
      throw new Error('Notification content must be at least 5 characters.');
    }
    this.content = content;
  }
}

const notification = new Notification();
notification.content = 'dcdiisahiujdahs';
