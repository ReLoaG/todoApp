import Backendless from 'backendless';

function registerUser( userEmail, userPassword ){
	var user = new Backendless.User();
    user.email = userEmail;
    user.password = userPassword;

    console.log("registering user...");
    Backendless.UserService.register( user );
}

export  { registerUser }