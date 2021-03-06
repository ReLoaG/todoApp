import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions } from '../actions';
import emailValidator from './Constants';
import Backendless from 'backendless';

class RegistrationForm extends React.Component{

  handleSubmit(e){
  	const emailInput = this.refs.emailInput;
  	const passwordInput = this.refs.passwordInput;
  	
  	if(emailValidator.test(emailInput.value) && passwordInput.value !== '') {
			var user = new Backendless.User();
	    user.email = emailInput.value;
	    user.password = passwordInput.value;

	  	var register = Backendless.UserService.register( user ).then( () => {
	  		this.props.registerNewUser(emailInput.value, passwordInput.value);
	  		console.log('register', register);
		  	this.refs.emailInput.value = '';
		  	this.refs.passwordInput.value = '';

	    	return window.location = '/';
	  	}).catch(() => {
	  		alert("Something`s going wrong, try again, please :)" );
	  	});
    } else{
    	alert("Entered email: '" + emailInput.value + "'  is invalid" );
    }
	}

  render() {
    console.log('props', this.props.testStore);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
			      <h3 className="title">Registration Form</h3>
				    <form onSubmit={this.handleSubmit.bind(this)}>

				    	<label>Enter e-mail</label><br />
				        <input className="input" type="text" ref="emailInput"  placeholder="Enter your email address" /> <br />

				        <label>Enter password</label><br />
				        <input className="input" type="password" ref="passwordInput"  placeholder="Enter your password" /> <br />

				        <input type="submit" value="Register" className="btn btn-primary"/> <br />

				        <h6>Have an account? <Link to="/login">Login</Link></h6>
				        
				    </form>
      		</div>
      	</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state.userState
  }),
  actions
)(RegistrationForm);


	// registerUser(){
		
		/***************************** TRUE GET QUERY *****************************

		fetch('https://api.backendless.com/25966DF2-EBF5-7EA6-FFC7-43173838AB00/9F29A9CF-EE5E-5083-FFDC-3398D5BC3400/data/existing_users', {  
	    method: 'GET',  
	    headers: {  
	      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
	    }
	  })
	  .then(function (data) {  
	    console.log('Request succeeded with JSON response', data);  
	  })  
	  .catch(function (error) {  
	    console.log('Request failed', error);  
	  });

		**************************************************************************/

		

		// fetch('https://api.backendless.com/25966DF2-EBF5-7EA6-FFC7-43173838AB00/9F29A9CF-EE5E-5083-FFDC-3398D5BC3400/data/existing_users', {  
	 //    method: 'POST',  
	 //    headers: {  
	 //      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  // 			'Content-Type': 'application/json'
	 //    },
	 //    body: JSON.stringify({
		// 	  "email": newUserEmail,
		// 	  "password": newUserPassword
		// 	})
	 //  })
	 //  .then(function (data) {  
	 //    console.log('Request succeeded with JSON response', data);  
	 //  })  
	 //  .catch(function (error) {  
	 //    console.log('Request failed', error);  
	 //  });
