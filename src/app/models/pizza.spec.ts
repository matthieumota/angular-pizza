import { Pizza } from './pizza';

describe('Pizza', () => {
  it('should create an instance', () => {
    expect(new Pizza(1, 'Pepperoni', 12)).toBeTruthy();
  });
});
