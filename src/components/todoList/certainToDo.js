import React from 'react';

class CertainToDo extends React.Component{
	constructor(props){
		super(props);
	}

	deleteToDo(){
		return(alert('task was deleted!'));
	}

	render() {
		return(
			<div className="col-md-12">
				<div className="col-md-2">
					<input type="checkbox" ref="inputToDo" />
				</div>
				<div className="col-md-8">
					<strong>nameOfToDo</strong>
				</div>
				<div className="col-md-2">
					<button onClick={this.deleteToDo.bind(this)} className="btn btn-default">Delete</button>
				</div>
				<hr />
			</div>
		);
	}
}

export default CertainToDo;