import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';
import Backendless from 'backendless';

class Header extends React.Component{

	logoutUser(){
		Backendless.UserService.logout();
		alert('User was logged out!');
		this.props.logoutUser();
		return window.location = '/';
		// return hashHistory.push('/');
	}

	render() {
		return(
			<div className="container-fluid header">
				<div className="row">
					<div className="left">
						<span>Todo App</span>
					</div>
					<div className="right">
						<button className="btn btn-default" onClick={this.logoutUser.bind(this)}>Logout</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
    userState: state.loginStatus
  }),
  actions
)(Header);