import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  imports: [FormsModule, CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {
  @Input() author!: User

  years: number[] = Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i)
}
