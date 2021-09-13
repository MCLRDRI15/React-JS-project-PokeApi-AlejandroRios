import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/GlobalIndex';

export const composeEnhancers =
  window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk,logger))
);

export default store;