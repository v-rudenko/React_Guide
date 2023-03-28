import { useState } from "react";

import Todo from "./models/todo";
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // console.log(todos.pop())

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    // console.log(newTodo.id);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoForRemoveId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoForRemoveId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos}>Baboon</Todos>
    </div>
  );
}

export default App;
