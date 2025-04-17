import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-search',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    <div>
      <input type="text" #searchBox (input)="search(searchBox.value)">
      <ul>
        <li *ngFor="let pizza of pizzas$ | async" >
          {{ pizza.name }}
        </li>
      </ul>
    </div>
  `
})
export class PizzaSearchComponent implements OnInit {
  pizzas$!: Observable<Pizza[]>;
  // private terms = new BehaviorSubject<string>(''); // Utile si on veut envoyer une première valeur dans le flux
  private terms = new Subject<string>();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzas$ = this.terms.pipe(
      // Attends 300 ms avant de passer à la suite
      debounceTime(300),
      // On ne fait rien si la valeur est la même qu'avant dans le flux
      distinctUntilChanged(),
      // Si tout est ok, on envoie la recherche à un autre observable qui sera celui utilisé pour pizzas$
      switchMap((term: string) => this.pizzaService.search(term))
    );
  }

  search(value: string) {
    // On envoie chaque recherche dans le flux (le Subject)
    this.terms.next(value);
  }
}
