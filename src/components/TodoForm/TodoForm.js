import React, { useState } from 'react'
import "./TodoForm.css"

function TodoForm({addTaskTodo}) {
    const [input, setInput] = useState("")

    function handleChange(event){
        // console.log(event.target.value)
        setInput(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        addTaskTodo(input)
        setInput("")
    }

  return (
      <form onSubmit={handleSubmit} className='todo-form'>
          <input onChange={handleChange} className='todo-input' value={input} placeholder='ENter your task here...' />
          <button type='submit' className='todo-button'>Add a TAsk</button>
      </form>
  )
   
}

export default TodoForm