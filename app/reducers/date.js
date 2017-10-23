const moment = require('moment');
import { GET_DATE, GET_WEEKS, GET_DAYS } from '../actions/actions';

const initialState = {
  currentDate: moment(),
  currentWeeks: [],
  currentDays: []
};

export const date = function(state = initialState, action) {
  switch(action.type) {
    case GET_DATE:
      return {
        ...state,
        currentDate: action.date
      }
    case GET_WEEKS:
      return {
        ...state,
        currentWeeks: action.weeks
      }
    case GET_DAYS:
      return {
        ...state,
        currentDays: action.days
      }
    default:
      return state;
  }
}