import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const add = false
  const counter = useCounter(add);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
