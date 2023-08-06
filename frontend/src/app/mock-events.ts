import {Event} from './models/event';

export const EVENTS: Event[] = [
  {
    id: 1,
    comment: 'Преглед',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: {id: 1, name: 'Шаро', type: 'dog', ages: 5, breed: 'bulldog',
      owner: {id: 1, name: 'Ivan', phone: '0883', email: 'ivan@email.com'}}
  },
  {
    id: 2,
    comment: '',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: { id: 2, name: 'Кити', type: 'cat', ages: 4, breed: 'persian',
      owner: {id: 2, name: 'Ели', phone: '0883', email: 'eleonora@email.com'}
    }
  },
  {
    id: 3,
    comment: 'Преглед',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: {id: 3, name: 'BugsBunny', type: 'rabbit', ages: 4, breed: 'home',
      owner: {id: 3, name: 'Пешо', phone: '0883', email: 'pesho@email.com'}
    }
  }
];
