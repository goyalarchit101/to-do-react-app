import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let styleTodoList = {
    overflowY: 'scroll',
    border:'1px solid red',
    // width:'500px',
    // float: 'left',
    maxHeight:'300px',
    height: "auto"
  }

  return (
    <div style={styleTodoList} className='container'>
      <h3 className=' my-3'>ToDOs list</h3>
      {props.todos.map(todoItem => (
          <TodoItem values = {todoItem} key = {todoItem.sno} onDelete = {props.onDelete} />
      ))}
    </div>
  )
}   
