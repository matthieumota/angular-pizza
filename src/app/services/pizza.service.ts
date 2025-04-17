import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, Subject } from 'rxjs';

export const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  events = new Subject<string>()

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('/api/pizzas')
  }

  getPizzasSlowly(): Observable<Pizza[]> {
    return this.getPizzas().pipe(delay(2000))
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${pizza.id}`, pizza)
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, pizza)
  }
}
