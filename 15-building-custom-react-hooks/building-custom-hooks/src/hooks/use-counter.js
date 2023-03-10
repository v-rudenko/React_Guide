import { useState, useEffect } from "react";

const useCounter = (operator) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>  operator === '+' ? (prevCounter + 1) : (prevCounter - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [operator]);

  return counter;
};

export default useCounter;
