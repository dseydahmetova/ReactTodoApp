import { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
  const [todo, setTodo] = useState([]);


  function addTodo(input) {
    const newTodo = [...todo, input]
    setTodo(newTodo)
  }

  function removeTodo(id) {
    const removeArr = [...todo].filter(todo => todo.id !== id)
    setTodo(removeArr)
  }

  function checkTodo(index, isChecked) {
    const updatedList = [...todo];
    updatedList[index].checked = isChecked;
    setTodo(updatedList);
  };

  function editTodo(todoId, newValue) {
    setTodo(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  return (
    <div>
      <TodoForm onClick={addTodo} />
      <Todo todo={todo} removeTodo={removeTodo} editTodo={editTodo} checkTodo={checkTodo} />
    </div>
  )
}

export default TodoList
