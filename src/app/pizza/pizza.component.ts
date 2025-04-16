import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  imports: [FormsModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
}
