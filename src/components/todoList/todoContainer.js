import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';


class TodoContainer extends React.Component{

	deleteToDo(){
		return 'hello';
	}

	render() {
		console.log('current todo list:', this.props.todos);
		return(
			<div className="container">
				<div className="row">
					<form>
						{this.props.todos.map((a) =>
							<div key={a.id}>
								<div className="col-md-2">
									<input onChange={() => this.props.changeStatus(a.id)} type="checkbox" ref="inputToDo" />
								</div>
								<div className="col-md-8">
									<strong style={{
							      textDecoration: a.completed ? 'line-through' : 'none'
							    }}>
											{a.text}
									</strong>
								</div>
								<div className="col-md-2">
									<button onClick={this.deleteToDo.bind(this)} className="btn btn-default">Delete</button>
								</div>
							</div>
						)}
					</form>
				
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		todos: state.todos
	}),
	actions
)(TodoContainer);

// <div className="col-md-2">
// <input className={status === 0 ? 'active' : 'completed'} type="checkbox" ref="inputToDo" />
// </div>
// <div className="col-md-8">
// <strong>{toDoName}</strong>
// </div>
// <div className="col-md-2">
// <button onClick={this.deleteToDo.bind(this)} className="btn btn-default">Delete</button>
// </div>