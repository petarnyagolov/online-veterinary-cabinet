import { Animal } from './models/animal';

export const ANIMALS: Animal[]=[
  { id: 1, name: 'Sharo', type: 'dog', ages: 5, breed: 'bulldog',
    owner: { id: 1, name: 'Ivan', phone: '0883', email: 'ivan@email.com'} },
  { id: 2, name: 'Kitty', type: 'cat', ages: 4, breed: 'persian',
    owner:{ id: 2, name: 'Ели', phone: '0883', email: 'eli@email.com'}},
  { id: 3, name: 'Bugs Bunny', type: 'rabbit', ages: 4, breed: 'home',
    owner:{ id: 3, name: 'Пешо', phone: '0883', email: 'pesho@email.com'}}
];
