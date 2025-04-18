import { TestBed } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import { provideHttpClient } from '@angular/common/http';

describe('PizzaService', () => {
  let service: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(PizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
