import { combineReducers, applyMiddleware } from 'redux';
import playerReducer from './playerReducer';
import thunk from 'redux-thunk';

const allReducers = {
  players: playerReducer,
}

const rootReducer = combineReducers(allReducers, applyMiddleware(thunk));

export default rootReducer;