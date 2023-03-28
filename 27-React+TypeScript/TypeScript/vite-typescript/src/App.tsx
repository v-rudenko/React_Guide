import { useState } from "react";

import Todo from "./models/todo";
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText:string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })

  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}>Baboon</Todos>
    </div>
  );
}

export default App;
