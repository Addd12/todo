import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        //console.log(...todos) this line prints the list on the console of the browser
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo=>{
        if (todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodos)
    }
  return (
    <div>
      <h1>what's the plan for today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo}/>
    </div>
  )
}

export default TodoList
