import { MouseEventHandler } from "react";
import classes from "./TodoTask.module.css";

type Props = {
  id: string;
  text: string;
  onClick: MouseEventHandler;
};

const TodoTask = (props: Props) => {
  return (
    <li onClick={props.onClick} className={classes.item} id={props.id}>
      {props.text}
    </li>
  );
};

export default TodoTask;
