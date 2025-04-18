import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSearchComponent } from './pizza-search.component';
import { provideHttpClient } from '@angular/common/http';

describe('PizzaSearchComponent', () => {
  let component: PizzaSearchComponent;
  let fixture: ComponentFixture<PizzaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSearchComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
