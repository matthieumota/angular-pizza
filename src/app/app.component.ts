import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import { CounterComponent } from "./counter/counter.component";
import { AuthorComponent } from "./author/author.component";
import { User } from './models/user';
import { PizzaService } from './services/pizza.service';
import { MessageService } from './services/message.service';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule, CommonModule, PizzaComponent, CounterComponent, AuthorComponent],
})
export class AppComponent implements OnInit {
  title = 'Pizza Party';
  pizza?: Pizza;
  pizzas!: Pizza[];
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/1.jpg');
  total: number = 15;
  loading: boolean = false;
  messages: string[] = []
  showNewPizza: boolean = false
  newPizza: Pizza = new Pizza(0, '', undefined, 'cannibale.jpg')

  // pizzaService: PizzaService = new PizzaService(new HttpBackend(), new UserService(new HttpBackend()))

  constructor(
    private pizzaService: PizzaService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.loading = true

    this.pizzaService.getPizzasSlowly().subscribe(pizzas => {
      this.pizzas = pizzas
      this.loading = false
    })

    this.messages = this.messageService.getMessages()

    this.pizzaService.events.pipe(
      filter(event => event === 'update'),
      switchMap(() => this.pizzaService.getPizzas())
    ).subscribe(pizzas => {
      this.pizzas = pizzas
    })
  }

  onSelect(pizza: Pizza) {
    if (this.pizza && this.pizza.id === pizza.id) {
      this.pizza = undefined
      return
    }

    this.pizza = { ...pizza }; // On fait un clone de l'objet pour éviter les "références"
  }

  onCancel(event: any) {
    this.pizza = event
  }

  computeTotal(event: number) {
    this.total += event
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index)
  }

  toggleNewPizza() {
    this.showNewPizza = !this.showNewPizza
  }

  save(event: KeyboardEvent) {
    if (event.key !== 'Enter') return

    if (!this.newPizza.name || !this.newPizza.price) return

    this.pizzaService.createPizza(this.newPizza).pipe(
      switchMap(() => this.pizzaService.getPizzas())
    ).subscribe(pizzas => {
      this.pizzas = pizzas
      this.toggleNewPizza()
      this.newPizza = new Pizza(0, '', undefined, 'cannibale.jpg')
    })
  }
}
