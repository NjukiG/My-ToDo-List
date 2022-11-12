import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import {useState} from "react"
import TodoTask from './components/TodoTask/TodoTask';

function App() {
  const[todos, setTodos] = useState([])

  function addTaskTodo(task){
    let id = 1
    if(todos.length > 0){
      id = todos[0].id + 1
    }
    let todo = {id: id, task: task, completed: false}
    // console.log(todo);
    // console.log(todos)
    setTodos([todo, ...todos])
  }

  function removeTaskTodo(id){
    let newTodos = [...todos].filter((todo) => {
      return (
        todo.id !== id
      )
    })
    setTodos(newTodos)
  }

  function completeTaskTodo(id){
    // console.log(id)
    let newTodos = todos.map((todo)=> {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todo-app">
      <h1>My ToDo List App Practice</h1>
      <TodoForm addTaskTodo={addTaskTodo} />
      {/* <TodoTask /> */}
      {todos.map((todo, index) => {
        return (
          <TodoTask todo={todo} key={index} removeTaskTodo={removeTaskTodo} completeTaskTodo={completeTaskTodo} />
        )
      })}
    </div>
  );
}

export default App;
