import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const NameTypingHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AgeTypingHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const UserSubmitHandler = () => {
    if (enteredName === "" || enteredAge === "") {

      props.onShowError("Будь ласка вкажіть ім'я та вік (не порожні значення).");
      return false;
    }
    if (enteredAge <= 0) {
      props.onShowError("Вкажіть дійсний вік (> 0).");
      return false;
    }
    const user = {
      name: enteredName,
      age: enteredAge
    }
    // console.log(`Додано користувача ${enteredName} (${enteredAge} років)`);

    props.AddUser(user)
    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <div className={styles.form_wrapper}>
      <form action="">
        <div className={styles.form}>
          <label>Ім'я користувача</label>
          <input value={enteredName} onChange={NameTypingHandler} type="text" />
          <label>Вік (років)</label>
          <input value={enteredAge} onChange={AgeTypingHandler} type="number" />
          <Button value={"Додати користувача"} buttonClicked={UserSubmitHandler} />
        </div>
      </form>
    </div>
  );
};

export default Form;
