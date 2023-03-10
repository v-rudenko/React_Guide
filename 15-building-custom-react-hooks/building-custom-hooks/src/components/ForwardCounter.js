import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const add = true;
  const counter = useCounter(add);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
