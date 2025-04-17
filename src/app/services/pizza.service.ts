import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  getPizzas(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  getPizzasSlowly(): Promise<Pizza[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPizzas()), 2000);
    });
  }
}
