const BASE_URL = 'http://localhost:5000';

export const ANIMALS_URL= BASE_URL + '/api/animals';
export const TYPES_URL= BASE_URL + '/api/types';
export const ANIMALS_SEARCH_URL= ANIMALS_URL + '/search/:search';
export const ANIMAL_BY_ID_URL= ANIMALS_URL + '/';
export const EVENTS_URL= BASE_URL + '/api/events';
export const EVENTS_SEARCH_URL= EVENTS_URL + '/search/:search';
export const EVENT_BY_ID_URL= EVENTS_URL + '/:eventId';
export const HUMANS_URL= BASE_URL + '/api/humans';
export const USER_LOGIN_URL = BASE_URL + '/api/users/login'
export const USER_LOGOUT_URL = BASE_URL + '/api/users/logout'
