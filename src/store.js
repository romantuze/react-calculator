import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import calculatorReducer from './reducers';
export const store = createStore(calculatorReducer,applyMiddleware(thunk));