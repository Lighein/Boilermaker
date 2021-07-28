import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';



let store=createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware))
export default store;

