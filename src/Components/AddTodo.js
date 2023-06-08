import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const inputChangedTitle = (event) => {
        // const updatedKeyword = event.target.value;
        setTitle(event.target.value);
    }

    const inputChangedDesc = (event) => {
        // const updatedKeyword = event.target.value;
        setDesc(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onAddToDo(title, desc);
    }

    return (
        <div className='container my-3'>
            <form onSubmit={(event)=>{onFormSubmit(event)}}>
                <h3>Add to do item</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        className="form-control"
                        id="title" aria-describedby="title"
                        onChange={(event) => inputChangedTitle(event)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input
                        type="text"
                        value={desc}
                        className="form-control"
                        id="desc"
                        onChange={(event) => inputChangedDesc(event)}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
