import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions } from '../actions';
import Backendless from 'backendless';

class LoginForm extends React.Component {
  
  handleSubmit(e){
    const emailInput = this.refs.emailInput;
    const passwordInput = this.refs.passwordInput;

    var logIn = Backendless.UserService.login( emailInput.value, passwordInput.value, true )
    .then(() =>{
      this.props.loginUser(emailInput.value, passwordInput.value, true);
      console.log('you have been logged in and we`re redirecting you to your todoList!');
      this.refs.emailInput.value = '';
      this.refs.passwordInput.value = '';
      return window.location = '/';
    })
    .catch(() => {
      this.props.loginUser(false);
      alert('You have entered invalid email or password');
    });
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
          <h3 className="title">Login</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>

              <label>Enter e-mail</label><br />
              <input className="input" type="text" ref="emailInput" placeholder="Enter your email address" /> <br />

              <label>Enter password</label><br />
              <input className="input" type="password" ref="passwordInput" placeholder="Enter your password" /> <br />

              <input type="submit" value="Login" className="btn btn-primary" /> <br />

              <h6>Don`t have an account? <Link to="/register">Register</Link></h6>
              
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