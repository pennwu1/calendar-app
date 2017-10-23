const moment = require('moment');
import { GET_DATE } from '../actions/actions';

const initialState = {
  currentDate: moment(),
};

export const date = function(state = initialState, action) {
  switch(action.type) {
    case GET_DATE:
      return {
        currentDate: action.date
      }
    default:
      return state;
  }
}