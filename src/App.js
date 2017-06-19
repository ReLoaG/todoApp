import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  registerUser(){
    console.log('registerUser^   ' + this.emailInput.value + 'who has password:   ' + this.passwordInput.value);
    this.props.onRegisterUser(this.emailInput.value, this.passwordInput.value);
    this.emailInput.value = '';
    this.passwordInput.value = '';
  }

  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <input type="text" ref={(input) => {this.emailInput = input } } /> <br />
        <input type="password" ref={(input) => {this.passwordInput = input } } /> <br />
        <button onClick={this.registerUser.bind(this)}>Login</button>
          <p>{this.props.testStore.email} </p>
          <p>{this.props.testStore.pass} </p>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onRegisterUser: (userEmail, userPassword) => {
      dispatch({type: 'REGISTER_NEW_USER', payload: {email: userEmail, pass: userPassword}});
    }
  })
)(App);
