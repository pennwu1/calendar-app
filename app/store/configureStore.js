import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(logger));
}