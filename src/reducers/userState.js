//import actions from '../actions.js';

export default function userState(state = {}, action){
	if(action.type === 'REGISTER_NEW_USER'){
		return {
			...state,
			...action.payload
		};
	} else if(action.type === 'LOGIN_USER'){
		return [
			...state,
			action.payload
		];
	}  
	return state;
}