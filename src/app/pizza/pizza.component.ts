import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../models/pizza';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza',
  imports: [FormsModule, CommonModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  @Input() pizza?: Pizza;
  @Output() canceled: EventEmitter<undefined> = new EventEmitter();

  cancel() {
    this.canceled.emit(undefined);
  }
}
