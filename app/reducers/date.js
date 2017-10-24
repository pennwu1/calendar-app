const moment = require('moment');
import { GET_DATE, GET_MONTH, LAST_MONTH, NEXT_MONTH, GET_WEEKS, GET_DAYS } from '../actions/actions';

const initialState = {
  currentMonth: moment(),
  currentWeeks: [],
  currentDays: {}
};

export const date = function(state = initialState, action) {
  switch(action.type) {
    case GET_MONTH:
      return {
        ...state,
        currentMonth: action.month
      }
    case LAST_MONTH:
      return {
        ...state,
        currentMonth: action.month
      }
    case NEXT_MONTH:
      return {
        ...state,
        currentMonth: action.month
      }
    case GET_WEEKS:
      return {
        ...state,
        currentWeeks: action.weeks
      }
    case GET_DAYS:
      const newState = {
        ...state
      };
      newState.currentDays[action.weekNumber] = action.days;
      return {
        ...newState
      }
    default:
      return state;
  }
}