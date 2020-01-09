import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './reducer.ts';

import {ReduxStore} from '../ts-interfaces/interfaces.ts';
// interface Item {
//   id: number,
//   description: string
// }

// interface ReduxStore {
//   items: Array<Item>
// }

export default function configureStore(initialState: ReduxStore) {
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}