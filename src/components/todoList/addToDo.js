import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';

class AddToDo extends React.Component{
	constructor(props){
		super(props);
	}

	handleToDo(){
		const newToDo = this.refs.inputToDo.value;
		this.props.addNewToDo(newToDo);
		this.refs.inputToDo.value = '';
	}

	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					<input type="text" ref="inputToDo" />
					<button onClick={this.handleToDo.bind(this)} className="btn btn-primary">Add ToDo</button>
					</div>
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
)(AddToDo);