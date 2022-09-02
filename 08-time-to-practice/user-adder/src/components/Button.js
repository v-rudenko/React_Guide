import React from "react";
import styles from "./Button.module.css"

const Button = (props) => {
  const ButtonClickHandler = (event) => {
    event.preventDefault();
    props.buttonClicked();
  };

  return <button className={styles.button} onClick={ButtonClickHandler}>{props.value}</button>;
};

export default Button;
