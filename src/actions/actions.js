export const ADD_FLIGHT = 'ADD_FLIGHT';
export const EDIT_FLIGHT = 'EDIT_FLIGHT';
export const SET_STATUS_FLIGHT = 'SET_STATUS_FLIGHT';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const SET_AMOUNT = 'SET_AMOUNT';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
};

export function addFlight(obj) {
  return { type: ADD_FLIGHT, obj };
}

export function editFlight(obj) {
  return { type: EDIT_FLIGHT, obj };
}

export function setStatusFlight(id, status) {
  return { type: SET_STATUS_FLIGHT, id, status };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function setAmount(amount) {
  return { type: SET_AMOUNT, amount };
}
