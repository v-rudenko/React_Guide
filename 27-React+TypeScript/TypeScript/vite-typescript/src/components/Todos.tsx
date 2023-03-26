import Todo from "../models/todo";
import TodoTask from "./Todo";

type Props = {
  items: Todo[];
  children?: React.ReactNode;
};

const Todos = (props: Props) => {
  console.log(props.items[0].text)
  return <ul>
    {props.items.map(item => <TodoTask key={item.id} text={item.text}/>)}
  </ul>;
};

export default Todos;
