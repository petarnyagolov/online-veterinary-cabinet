import { Animal } from '../models/animal';

export const ANIMALS: Animal[]=[
  { id: '123456789012345678780098', name: 'Sharo', type: 'dog', ages: 5, breed: 'bulldog',
    owner: { id: '1', name: 'Ivan', phone: '0883', email: 'ivan@email.com'} },
  { id: '', name: 'Kitty', type: 'cat', ages: 4, breed: 'persian',
    owner:{ id: '2', name: 'Eleonora', phone: '0883', email: 'eleonora@email.com'}},
  { id: '3', name: 'BugsBunny', type: 'rabbit', ages: 4, breed: 'home',
    owner:{ id: '3', name: 'Pesho', phone: '0883', email: 'pesho@email.com'}}
];
