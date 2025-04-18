import { Component } from '@angular/core';
import { User } from '../../models/user';
import { CounterComponent } from '../../counter/counter.component';
import { AuthorComponent } from '../../author/author.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent, AuthorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/1.jpg');
  total: number = 15;

  computeTotal(event: number) {
    this.total += event
  }
}
