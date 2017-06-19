//import actions from '../actions.js';

export default function userRegistration(state = [], action){
	if(action.type === 'LOGIN_USER'){
		return [
			...state,
			action.payload
		];
	} 
	return state;
}