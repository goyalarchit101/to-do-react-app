import './App.css';
import Nav from './Components/Nav';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { useState } from "react";
import AddTodo from './Components/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Software Developer",
      salary: "20LPA"
    },
    {
      sno: 2,
      title: " Senior Software Developer",
      salary: "50LPA"
    }
  ]);

  const onDelete = (todo) => {
    console.log("deleted fun clicked", todo);
    if (todos.length) {
      let index = todos.indexOf(todo);
      if (index > -1) { // only splice array when item is found
        // 2nd parameter means remove one item only
        var newTodo = todos.filter((e) => {
          return e !== todo;
        })
        setTodos(newTodo);
      }
    }
  }

  const onAddToDo = (title, des) => {
    console.log(title, des);
    var element = {};
    element.sno = todos.length + 1
    element.title = title ;
    element.salary = des;
    setTodos([...todos, element]);
  }

  return (
    <div className='container'>
      <Nav title={"My Title"} searchBar={false} />
      <AddTodo onAddToDo={onAddToDo} />
      {
        todos.length ? <Todos todos={todos} onDelete={onDelete} /> : "No todo to display"
      }
      <Footer />
    </div>
  );
}

export default App;
