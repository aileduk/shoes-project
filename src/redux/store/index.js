import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { appReducer } from '../app/reducer';

const rootReducer = combineReducers({
  appReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));