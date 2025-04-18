import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorComponent } from './author.component';
import { User } from '../models/user';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('author', new User('Doe', 'John', '2000-01-01', 'blabla'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.age')?.textContent).toContain('Âge: 25');
  });
});
