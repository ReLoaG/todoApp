import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';
import { actions } from '../actions';
import Backendless from 'backendless';

class LoginForm extends React.Component {
  loginUser(userEmail, userPassword){
    
    fetch('https://api.backendless.com/25966DF2-EBF5-7EA6-FFC7-43173838AB00/9F29A9CF-EE5E-5083-FFDC-3398D5BC3400/data/existing_users', {  
      method: 'POST',  
      headers: {  
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": userEmail,
        "password": userPassword
      })
    })
    .then(function (data) {  
      console.log('Request succeeded with JSON response', data);
    })  
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
  }

  handleSubmit(e){
    const emailInput = this.refs.emailInput;
    const passwordInput = this.refs.passwordInput;
    var loggedIn = new Number();

    const logIn = Backendless.UserService.login( emailInput.value, passwordInput.value, true )
      // .then(() => loggedIn = 1)
      // .catch(() => loggedIn = 0);
    // logIn === true ? loggedIn = 1 : loggedIn = 0;
    console.log('loggedIn: ' + logIn.email);

    return this.props.loginUser(loggedIn);
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>

              <label>Enter e-mail</label><br />
              <input type="text" value={this.props.testStore.email} ref="emailInput"  /> <br />

              <label>Enter password</label><br />
              <input type="password" value={this.props.testStore.pass} ref="passwordInput"  /> <br />

              <input type="submit" value="Login" className="btn btn-primary" /> <br />

              <h4>Don`t have an account? <Link to="/register">Register</Link></h4>
              
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
)(LoginForm);
 //  constructor(props) {
 //    super(props);
 //    this.state = {email: "", password: ""};

 //    this.onChangeEmail = this.onChangeEmail.bind(this);
 //    this.onChangePassword = this.onChangePassword.bind(this);
 //    this.handleSubmit = this.handleSubmit.bind(this);
 //  }

 //  onChangeEmail(e) {
 //    var val = e.target.value;
 //    this.setState({email: val});
  // }

 //  onChangePassword(e) {
 //    var val = e.target.value;
 //    this.setState({password: val});
 //  }

 //  handleSubmit(e) {
 //    e.preventDefault();
 //    if(this.state.email && this.state.password){
 //      if(emailValidator.test(this.state.email))
 //      {
 //        alert("email: " + this.state.email + "   " + "password: " + this.state.password);
 //      }
 //      else{
 //        alert("Error!!! Your email is invalid!");
 //      }
 //    }
 //    else{
 //      alert("Error!!! Fill all inputs!");
 //    }
 //  }

  // render() {
  //   return(
  //     <div>
  //       This is LoginForm Component!
  //     </div>
  //   );
    // return (
    //   <div>
    //     <h2> User Login </h2>
    //       <form onSubmit={this.handleSubmit}>
    //           <p>
    //               <label>email:</label><br />
    //               <input type="text" value={this.state.email} onChange={this.onChangeEmail}/><br />
    //               <label>password:</label><br />
    //               <input type="text" value={this.state.password} onChange={this.onChangePassword}/>
    //           </p>
    //           <input type="submit" value="Отправить" /><Link to="/registration">Registration</Link>
    //       </form>
    //     <span>Don't have an account? &nbsp;</span> 
    //   </div>
    // );
//   }
// }