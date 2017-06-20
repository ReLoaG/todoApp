import React from 'react';

class Header extends React.Component{

	logoutUser(){
		return(
			alert('User was logged out!')
		);
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

export default Header;