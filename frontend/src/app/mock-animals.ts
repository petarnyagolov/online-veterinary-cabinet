import { Animal } from './models/animal';
import { BreedService } from "./services/breed.service";

export const ANIMALS: Animal[]=[
  { id: '1', name: 'Sharo', type: 'dog', ages: 5, breed: { id:'1', breed:'NO BREED',type: { id:'2',type:'DOG' }},
    owner: { id: '1', name: 'Ivan', phone: '0883', email: 'ivan@email.com'} },
  { id: '2', name: 'Kitty', type: 'cat', ages: 4, breed: { id:'2', breed:'NO BREED',type: { id:'1',type:'CAT' }},
    owner:{ id: '2', name: 'Eleonora', phone: '0883', email: 'eleonora@email.com'}},
  { id: '3', name: 'BugsBunny', type: 'rabbit', ages: 4, breed: { id:'3', breed:'NO RABBIT',type: { id:'1',type:'RABBIT' }},
    owner:{ id: '3', name: 'Pesho', phone: '0883', email: 'pesho@email.com'}}
];
