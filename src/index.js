import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './css/bootstrap.min.css';
import './css/custom.css';

// import App from './App';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ListOfToDos from './components/todoList/ListOfToDos';

import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.subscribe(() => {
// 	console.log('subscribe', store.getState());
// });

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" /*render={() => loddedIn ?( <Redirect to="/todolist" /> ) : {}}*/ component={RegistrationForm}/>
      <Route path="/register" component={RegistrationForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/todolist" component={ListOfToDos}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

/**********************************************************************/


// function userLogin(state = [], action){
// 	if(action.type === 'LOGIN'){
// 		return [
// 			...state,
// 			action.payload
// 		];
// 	}
// 	console.log(action);
// 	return state;
// }

// const store = createStore(userLogin);

// const userEmail = document.querySelectorAll('.emailInput')[0];
// const userPass = document.querySelectorAll('.passwordInput')[0];
// const loginButton = document.querySelectorAll('.loginButton')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
// 	list.innerHTML = '';
// 	userEmail.value = '';
// 	userPass.value = '';
// 	store.getState().forEach( userEmail => {
// 		const li = document.createElement('li');
// 		li.textContent = userEmail.email;
// 		list.appendChild(li);
// 	});
// 	store.getState().forEach( userPass => {
// 		const li_1 = document.createElement('li');
// 		li_1.textContent = userPass.password;
// 		list.appendChild(li_1)
// 	})
// });

// loginButton.addEventListener('click', () => {
// 	store.dispatch({ 
// 		type: 'LOGIN', 
// 		payload: {
// 			email: userEmail.value, 
// 			password: userPass.value 
// 		}
// 	});

// });

/****************************************************************************************/

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router,  Route,  Link} from 'react-router-dom'

// import LoginForm from './components/LoginForm'
// import RegistrationForm from './components/RegistrationForm'
// import ListOfToDos from './components/ListOfToDos'


// ReactDOM.render(
// 	<Router history={Router}>
//     <Route path='login' component={LoginForm} >
// 	    <Route path='registration' component={RegistrationForm} />
// 	    <Route path='todos' component={ListOfToDos} />
//     </Route>
//   </Router>
//   ,
//   document.getElementById("root")
// )