export type NotificationType = 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR';

export interface Notification {
  notification_id: number;
  company_id: number;
  user_id: number;
  title: string;
  message: string;
  type: NotificationType;
  is_read: boolean;
  created_at: Date;
}

export class NotificationModel implements Notification {
  notification_id: number = 0;
  company_id: number = 0;
  user_id: number = 0;
  title: string = '';
  message: string = '';
  type: NotificationType = 'INFO';
  is_read: boolean = false;
  created_at: Date = new Date();
}