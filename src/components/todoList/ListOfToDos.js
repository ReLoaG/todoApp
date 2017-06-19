import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';

import Header from './Header';
import AddToDo from './addToDo';
import TodoContainer from './todoContainer';

class ListOfToDos extends React.Component{
	
	render(){
		return(
			<div>
				<Header />
				<hr />
				<hr />
				<AddToDo />
				<hr />
				<TodoContainer />
			</div>
		);
	}
}

export default connect(
	state => ({
    todos: state.todos
  }),
  actions
)(ListOfToDos);