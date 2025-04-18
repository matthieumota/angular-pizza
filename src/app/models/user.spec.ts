import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/1.jpg')).toBeTruthy();
  });
});
