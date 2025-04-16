import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule, CommonModule],
})
export class AppComponent {
  title = 'Pizza Party';
  pizza!: Pizza;
  pizzas: Pizza[] = PIZZAS;

  onSelect(pizza: Pizza) {
    this.pizza = { ...pizza }; // On fait un clone de l'objet pour éviter les "références"
  }
}
