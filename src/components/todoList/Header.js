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
						<h4>Todo App</h4>
					</div>
					<div className="right">
						<button onClick={this.logoutUser.bind(this)}>Logout</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;