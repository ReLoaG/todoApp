export default function loginStatus(state = new Boolean(), action){
	switch(action.type){

		case 'LOGGED_IN':
			return action.payload;
			

		default:
			return state;
	}
}