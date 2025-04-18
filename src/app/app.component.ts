import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";
import { AuthorComponent } from "./author/author.component";
import { User } from './models/user';
import { MessageService } from './services/message.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, CounterComponent, AuthorComponent],
})
export class AppComponent implements OnInit {
  title = 'Pizza Party';
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/1.jpg');
  total: number = 15;
  messages: string[] = []

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages()
  }

  computeTotal(event: number) {
    this.total += event
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index)
  }
}
