import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'Pizza Party';
  messages: string[] = []

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages()
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index)
  }
}
