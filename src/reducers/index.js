import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userState from './userState';
import todos from './todos';
import loginStatus from './loginStatus';

export default combineReducers({
	routing: routerReducer,
	userState,
	loginStatus,
	todos
});