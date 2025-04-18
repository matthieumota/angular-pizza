import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'pizzas/:id', component: PizzaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:username', component: LoginComponent },
];
