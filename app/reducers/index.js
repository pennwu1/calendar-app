import { combineReducers } from 'redux';
import { date } from './date';

const rootReducer = combineReducers({
  date: date
});

export default rootReducer;