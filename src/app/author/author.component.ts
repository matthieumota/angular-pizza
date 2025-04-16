import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author',
  imports: [FormsModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {
  @Input() author!: User
}
