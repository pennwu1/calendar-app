const moment = require('moment');
import { SELECT_DAY, LAST_MONTH, NEXT_MONTH, createCalendar } from '../actions/actions';

const year = new Date().getYear();
const month = new Date().getMonth() + 1;

const initialState = createCalendar(year, month);

export const calendar = function(state = initialState, action) {
  switch(action.type) {
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: action.selectedDay
      }
    case LAST_MONTH:
      return action.calendar;
    case NEXT_MONTH:
      return action.calendar;
    default:
      return state;
  }
}