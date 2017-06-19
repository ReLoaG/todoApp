let nextTodoId = 0;
var actions = {

	registerNewUser: function (email, pass) {
		return{
	  	type: 'REGISTER_NEW_USER', 
	  	payload: {
	  		email: email, 
	  		pass: pass
	  	}
    }
	},

	loginUser: function(loginFlag){
		return{
	  	type: 'LOGGED_IN', 
	  	payload: {
	  		isLoggedIn: loginFlag
	  	}
	  }
	},

	addNewToDo: function (text) {
		if(text.length > 0)
  	return{
  		type: 'ADD_TODO',
	    id: Math.floor(Math.random()*100000000000),
	    text
		}
	},

	changeStatus: function (id) {
  	return{
  		type: 'TOGGLE_TODO', 
	  	id
		}
	},

	deleteToDo: function (id) {
  	return{
  		type: 'DELETE_TODO', 
	  	id
		}
	}
}
 
module.exports = {actions};