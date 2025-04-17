import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() value: number = 0
  @Output() changed: EventEmitter<number> = new EventEmitter()

  increment() {
    this.value++

    this.changed.emit(1)
  }

  decrement() {
    this.value--

    this.changed.emit(-1)
  }
}
