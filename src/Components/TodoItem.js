import React from 'react'

export const TodoItem = (props) => {
  return (
    <>
      <ul>
        <li>{props.values.sno }</li>
        <li>{props.values.title + " : "}</li>
        <li>{props.values.salary + " "}</li>
      </ul>
      <button onClick={()=>props.onDelete(props.values)} className="btn btn-danger btn-sm">Delete Employee data</button>
    </>
  )
}
