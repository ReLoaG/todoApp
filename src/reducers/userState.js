//import actions from '../actions.js';

export default function userState(state = {}, action){
	switch(action.type){
		case 'REGISTER_NEW_USER':
			return {
				...state,
				...action.payload
			};
		
		default:
			return state;
	}
}