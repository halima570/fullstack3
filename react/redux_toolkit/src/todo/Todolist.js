import React,{useEffect} from 'react'
import Todoitems from './Totalitems';
import { useSelector } from 'react-redux';
function Todolist() {
    const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<Todoitems id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
  
}

export default Todolist;