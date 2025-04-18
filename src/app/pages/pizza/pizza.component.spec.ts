import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
