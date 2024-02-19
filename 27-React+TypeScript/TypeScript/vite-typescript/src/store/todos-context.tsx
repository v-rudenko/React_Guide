import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({  
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

const TodosContextProvider = (props: Props) => {
  // const [first, setfirst] = useState(second);

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
      return prevTodos.filter((todo) => todo.id !== todoForRemoveId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
