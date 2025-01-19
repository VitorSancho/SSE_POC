import { Component, OnInit } from '@angular/core';
import { SseService } from './services/sse.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private sseService: SseService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    // URL do servidor SSE
    const sseUrl = 'http://localhost:5019/sse';  // Ajuste conforme sua URL

    // Conecta ao servidor SSE
    this.sseService.connect(sseUrl).subscribe({
      next: (data) => {
        // Emite a notificação para ser exibida em qualquer página
        this.notificationService.showNotification(data + ' Nova atualização recebida!');
      },
      error: (error) => {
        console.error('Erro na conexão SSE:', error);
      },
    });
  }
}
