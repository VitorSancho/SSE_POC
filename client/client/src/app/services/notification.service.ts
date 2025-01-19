import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: string[] = [];
  private notificationSubject = new Subject<string>();
  public notification$ = this.notificationSubject.asObservable();

  constructor() {}

  showNotification(message: string): void {
    this.notifications.push(message);
    this.notificationSubject.next(message);
  }

  closeNotification(index: number): void {
    this.notifications.splice(index, 1);
    this.notificationSubject.next('');
  }

  getNotifications(): string[] {
    return this.notifications;
  }
}
