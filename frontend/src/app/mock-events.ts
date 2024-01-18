import {Event} from './models/event';

export const EVENTS: Event[] = [
  {
    id: '1',
    comment: 'Преглед',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: {id: '1', name: 'Шаро', type: {id:'1',type:'dog'}, ages: 5, breed: { id:'2', breed:'NO BREED',type: { id:'1',type:'CAT' }},
      human: {id: '1', name: 'Ivan', phone: '0883', email: 'ivan@email.com'}}
  },
  {
    id: '2',
    comment: '',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: { id: '2', name: 'Кити', type:{id:'2',type: 'cat'}, ages: 4, breed: { id:'2', breed:'NO BREED',type: { id:'1',type:'CAT' }},
      human: {id: '2', name: 'Ели', phone: '0883', email: 'eleonora@email.com'}
    }
  },
  {
    id: '3',
    comment: 'Преглед',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: {id: '3', name: 'BugsBunny', type:{id:'3',type: 'rabbit'}, ages: 4, breed: { id:'2', breed:'NO BREED',type: { id:'1',type:'CAT' }},
      human: {id: '3', name: 'Пешо', phone: '0883', email: 'pesho@email.com'}
    }
  }
];
