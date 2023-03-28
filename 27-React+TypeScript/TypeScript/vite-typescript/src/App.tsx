import { useState } from "react";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoText:string) => {

  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}>Baboon</Todos>
    </div>
  );
}

export default App;
