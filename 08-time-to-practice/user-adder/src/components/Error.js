import React, { useState } from "react";
import styles from "./Error.module.css";
import Button from "./Button";

const Error = (props) => {
  

  const buttonClickHandler = (event) => {
    props.onHideError();
  };

  const ParentClick = () => {
    console.log("Батько");
  };

  const ChildClick = (event) => {
    event.stopPropagation();
    console.log("Дитина");
  };

  return (
    <div
      onClick={buttonClickHandler}
      className={`${styles.wrapper} ${!props.errorDisplayed && styles.hide}`}
    >
      <div onClick={ChildClick} className={styles.center_div}>
        <div className={styles.error_header__div}>
          <h2>{props.error_type}</h2>
        </div>
        <div><p className={styles.error_text}>{props.error_text}</p></div>
          {/* <h2 className={styles.error_header}>Неправильне введення</h2> */}
        <div className={styles.button_div}><Button value={"Добре"} className={styles.button} buttonClicked={buttonClickHandler} /></div>
      </div>
    </div>
  );
};

export default Error;
