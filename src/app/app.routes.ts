import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzasComponent }
];
