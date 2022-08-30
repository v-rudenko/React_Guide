import React from "react";

const Button = (props) => {
  const ButtonClickHandler = (event) => {
    event.preventDefault();
    props.submitUser();
  };

  return <button onClick={ButtonClickHandler}>Додати користувача</button>;
};

export default Button;
