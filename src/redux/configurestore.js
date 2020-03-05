import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {adduser} from './auth'

export const Configstore = () => {
    const store = createStore(
        combineReducers({
           adduser
        }),+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(logger)
    );
    return store;
}