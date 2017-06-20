import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ListOfToDos from './components/todoList/ListOfToDos';

import reducer from './reducers';

class App extends React.Router{
  render(){
    return(
      <Router history={history}>
        <Route path="/" component={ this.props.loginStatus ? ListOfToDos : LoginForm }/>
        <Route path="/register" component={RegistrationForm}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/todolist" component={ListOfToDos}/>
      </Router>
    );
  }
 }
export default App