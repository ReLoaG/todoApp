import Backendless from 'backendless';

Backendless.initApp( "25966DF2-EBF5-7EA6-FFC7-43173838AB00", "9F29A9CF-EE5E-5083-FFDC-3398D5BC3400", "v1" );

function registerUser( userEmail, userPassword ){
	var user = new Backendless.User();
    user.email = userEmail;
    user.password = userPassword;

    console.log("registering user...");
     // document.getElementById( "status" ).innerText = "registering user...";
    Backendless.UserService.register( user );
}

export  { registerUser }