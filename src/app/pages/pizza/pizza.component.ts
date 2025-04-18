import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../models/pizza';
import { switchMap } from 'rxjs';
import { PizzaService } from '../../services/pizza.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza',
  imports: [CommonModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent implements OnInit {
  pizza!: Pizza

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.pipe(
      switchMap(params => this.pizzaService.getPizza(+params.get('id')!))
    ).subscribe(pizza => {
      this.pizza = pizza
    })
  }
}
