import Todo from "../models/todo";

type Props = {
  items: Todo[];
  children?: React.ReactNode;
};

const Todos = (props: Props) => {
  return <ul>
    {props.items.map(item => <li key={item.id}>{item.text}</li>)}
  </ul>;
};

export default Todos;
