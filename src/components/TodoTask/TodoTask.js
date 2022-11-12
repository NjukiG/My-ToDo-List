import React from 'react'
import "./TodoTask.css"
import {RiDeleteBin2Fill} from "react-icons/ri"
import { ImCheckboxChecked } from "react-icons/im"

function TodoTask({todo, removeTaskTodo, completeTaskTodo}) {
  return (
    <div className= {todo.completed ? "todo-task complete" : "todo-task"}>
        {todo.task}
        {/* <button>Delete</button>
        <button>Update</button> */}
        <div className='buttons'>
            <RiDeleteBin2Fill onClick={()=> removeTaskTodo(todo.id)}/>
            <ImCheckboxChecked onClick={() => completeTaskTodo(todo.id)} />
        </div>
        
    </div>
  )
}

export default TodoTask