import React from 'react';
import { useState } from 'react';

function TodoForm(props) {

    const[input,setInput]=useState();

  const handleChange=e=>{
    setInput(e.target.value)
  }

  const handleSubmit=(e) =>{
      e.preventDefault();
      props.addTask({
        id:Math.floor(Math.random()*1000000),
        text:input,
        isComplete:false

    })
    setInput('')
    }

  return (
    <div>

        <form className='todo-form'>
            <input type='text' placeholder="Add a todo" onChange={handleChange} value={input} name="text"/>
            <button typ="submit" onClick={handleSubmit} className='todo-btn'>ADD TODO</button>
        </form>


    </div>
  )
}

export default TodoForm