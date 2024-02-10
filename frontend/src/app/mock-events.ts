import {Event} from './models/event';

export const EVENTS: Event[] = [
  {
    _id: '1',
    comment: 'Преглед',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: { name: 'Шаро', type: {_id:'1',type:'dog'}, ages: 5, breed: { _id:'2', breed:'NO BREED',type: { _id:'1',type:'CAT' }},
      human: { name: 'Ivan', phone: '0883', email: 'ivan@email.com'}}
  },
  {
    _id: '2',
    comment: '',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: {  name: 'Кити', type:{_id:'2',type: 'cat'}, ages: 4, breed: { _id:'2', breed:'NO BREED',type: { _id:'1',type:'CAT' }},
      human: { name: 'Ели', phone: '0883', email: 'eleonora@email.com'}
    }
  },
  {
    _id: '3',
    comment: 'Преглед',
    dateTime: new Date(),
    diagnose: '',
    treatment: '',
    animal: {
      'name': 'BugsBunny', type: { _id: '3', type: 'rabbit' }, ages: 4, breed: {
        _id: '2', breed: 'NO BREED', type: { _id: '1', type: 'CAT' }
      },
      human: { name: 'Ели', phone: '0883', email: 'eleonora@email.com' }
    }
  }
];
