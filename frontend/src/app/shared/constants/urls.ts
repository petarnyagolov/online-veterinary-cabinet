const BASE_URL = 'http://localhost:5000';

export const ANIMALS= BASE_URL + '/api/animals';
export const ANIMALS_URL_CREATE= ANIMALS + '/create';
export const TYPES= BASE_URL + '/api/types';
export const TYPES_CREATE= TYPES + '/create';
export const BREEDS= BASE_URL + '/api/breeds';
export const BREEDS_CREATE= BREEDS + '/create';
export const ANIMALS_SEARCH_URL= ANIMALS + '/search/:search';
export const ANIMAL_BY_ID_URL= ANIMALS + '/';
export const EVENTS_URL= BASE_URL + '/api/events';
export const EVENTS_SEARCH_URL= EVENTS_URL + '/search/:search';
export const EVENT_BY_ID_URL= EVENTS_URL + '/:eventId';
export const HUMANS= BASE_URL + '/api/humans';
export const HUMANS_CREATE= HUMANS + '/create';
export const USER_LOGIN_URL = BASE_URL + '/api/users/login'
export const USER_LOGOUT_URL = BASE_URL + '/api/users/logout'
