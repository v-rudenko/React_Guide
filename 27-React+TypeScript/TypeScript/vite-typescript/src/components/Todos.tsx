import Todo from "../models/todo";
import TodoTask from "./TodoTask";
import classes from "./Todos.module.css";

type Props = {
  onRemoveTodo: (todoId: string) => void;
  items: Todo[];
  children?: React.ReactNode;
};



const Todos = (props: Props) => {

  const clickHandler = (event: React.MouseEvent) => {
    console.log(event.currentTarget.id);
    props.onRemoveTodo(event.currentTarget.id);
  };
  
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoTask
          id={item.id}
          onClick={clickHandler}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
