import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userState from './userState';
import todos from './todos';

export default combineReducers({
	routing: routerReducer,
	userState,
	todos
});