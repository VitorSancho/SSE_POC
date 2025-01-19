import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    // Subscribing to notification updates
    this.notifications = this.notificationService.getNotifications();
  }

  closeNotification(index: number) {
    this.notificationService.closeNotification(index);
  }
}
