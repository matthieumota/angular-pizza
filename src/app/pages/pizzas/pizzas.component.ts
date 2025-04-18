import { Component } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza.service';
import { filter, finalize, Subscription, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from '../../pizza/pizza.component';
import { PizzaSearchComponent } from '../../pizza-search/pizza-search.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pizzas',
  imports: [FormsModule, CommonModule, PizzaComponent, PizzaSearchComponent, RouterLink],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.scss'
})
export class PizzasComponent {
  pizza?: Pizza;
  pizzas!: Pizza[];
  loading: boolean = false;
  showNewPizza: boolean = false
  newPizza: Pizza = new Pizza(0, '', undefined, 'cannibale.jpg')
  subscription!: Subscription

  // pizzaService: PizzaService = new PizzaService(new HttpBackend(), new UserService(new HttpBackend()))

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.loading = true

    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas
      this.loading = false
    })

    // Attention dans un Subject il faut unsubscribe
    this.subscription = this.pizzaService.events.pipe(
      filter(event => event === 'update'),
      switchMap(() => this.pizzaService.getPizzas())
    ).subscribe(pizzas => {
      console.log('call')
      this.pizzas = pizzas
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    //this.pizzaService.events.complete()
    //this.pizzaService.events = new Subject<string>()
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

  delete(pizza: Pizza) {
    if (!confirm('Voulez-vous vraiment supprimer cette pizza ?')) return

    this.pizzaService.deletePizza(pizza).subscribe(_ => {
      this.pizzas = this.pizzas.filter(p => p.id !== pizza.id)
    })
  }

  toggleNewPizza() {
    this.showNewPizza = !this.showNewPizza
  }

  save(event: KeyboardEvent) {
    if (this.loading) return
    if (event.key !== 'Enter') return

    if (!this.newPizza.name || !this.newPizza.price) return

    this.loading = true

    this.pizzaService.createPizza(this.newPizza).pipe(
      switchMap(() => this.pizzaService.getPizzas()),
      finalize(() => this.loading = false),
    ).subscribe((pizzas) => {
      this.pizzas = pizzas
      this.toggleNewPizza()
      this.newPizza = new Pizza(0, '', undefined, 'cannibale.jpg')
    })
  }
}
