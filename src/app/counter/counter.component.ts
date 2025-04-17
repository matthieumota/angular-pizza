import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() value: number = 0
  @Output() changed: EventEmitter<number> = new EventEmitter()

  constructor(private messageService: MessageService) {}

  increment() {
    this.value++

    this.changed.emit(1)
    this.messageService.addMessage(`Increment to ${this.value}`)
  }

  decrement() {
    this.value--

    this.changed.emit(-1)
    this.messageService.addMessage(`Decrement to ${this.value}`)
  }
}
