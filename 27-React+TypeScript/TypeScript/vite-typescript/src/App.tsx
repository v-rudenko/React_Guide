import { useState } from "react";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo("Learn TypeScript"),
  ]

  return (
    <div className="App">
      <Todos items={todos}>Baboon</Todos>
    </div>
  );
}

export default App;
