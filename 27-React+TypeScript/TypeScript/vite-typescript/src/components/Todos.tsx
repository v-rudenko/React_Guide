import { useContext } from "react";

import Todo from "../models/todo";
import TodoTask from "./TodoTask";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";



const Todos = () => {
  
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoTask
          id={item.id}
          onClick={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
