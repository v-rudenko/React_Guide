import Todo from "../models/todo";
import TodoTask from "./TodoTask";

type Props = {
  items: Todo[];
  children?: React.ReactNode;
};

const Todos = (props: Props) => {
  return <ul>
    {props.items.map(item => <TodoTask key={item.id} text={item.text}/>)}
  </ul>;
};

export default Todos;
