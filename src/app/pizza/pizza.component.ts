import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../models/pizza';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  imports: [FormsModule, CommonModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  @Input() pizza?: Pizza;
  @Output() canceled: EventEmitter<undefined> = new EventEmitter();

  constructor(private pizzaService: PizzaService) {}

  cancel() {
    this.canceled.emit(undefined);
  }

  save() {
    if (!this.pizza) return

    this.pizzaService.updatePizza(this.pizza).subscribe(() => {
      this.pizzaService.events.next('update')
    })
  }
}
