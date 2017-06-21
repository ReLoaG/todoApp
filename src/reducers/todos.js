export default function todos(state = [], action){
	switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      );

    case 'DELETE_TODO':
      let arr = state.filter((todo) => {
        return !(todo.id === action.id);
      });
      return  arr;

    default:
      return state;
  }
}
// 	if(action.type === 'ADD_NEW_TODO'){
// 		return [
//         todoList: [
// 	        ...state.todoList,
// 	        {
// 	          id: action.id,
// 	          toDoName: action.toDoName,
// 	          completed: false
// 	        }]
//       ];
// 	} else if(action.type === 'TOGGLE_TODO'){
// 		state.map(function(todo, i) {
// 			console.log('this.id: ' + todo.id + '  action.id: ' + action.id + '  status: ' + todo.completed)
// 			if(todo.id === action.id) {
				
// 				let status = !todo.completed;
// 				console.log('status:   ' + status);
// 				let newstate = [...state];
// 				newstate[i] = todo;
// 			  return newstate
			  	
// 			  	//completed: status
// 			  //} 
// 			} else {
// 				return [];
// 			}
// 		});
// 	} else {
// 	return [{id: 4,
//           toDoName:' action.toDoName',
//           completed: false}];
//         }
// }