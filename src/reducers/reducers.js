import { combineReducers } from 'redux';
import {
  ADD_FLIGHT,
  EDIT_FLIGHT,
  SET_STATUS_FLIGHT,
  SET_VISIBILITY_FILTER,
  SET_AMOUNT,
  SET_SEARCH_INPUT,
  VisibilityFilters
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
function searchInput(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return action.text;
    default:
      return state;
  }
}
function amount(state = 0, action) {
  switch (action.type) {
    case SET_AMOUNT:
      return state + action;
    default:
      return state;
  }
}
function flights(state = {}, action) {
  switch (action.type) {
    case ADD_FLIGHT:
      return {
        ...state,
        [action.obj.id]: action.obj
      };
    case EDIT_FLIGHT:
      return {
        ...state,
        [action.obj.id]: {
          ...state[action.obj.id],
          ...action.obj
        }
      };
    case SET_STATUS_FLIGHT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          status: action.status
        }
      };
    default:
      return state;
  }
}

const timetableFlight = combineReducers({
  visibilityFilter,
  flights,
  amount,
  searchInput
});

export default timetableFlight;
