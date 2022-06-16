import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //function clickHandler
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React')

  // let title = props.title

  const clickHandler = () => {

    // setTimeout(() => {
    //   setTitle('Оновлена назва');
    // }, 3000)

    setTimeout(setTitle('Оновлена назва'), 3000);

    // setTitle('Updated!!!')
    console.log(`Натиснуто кнопку: ${title}`);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Змінити назву</button>
    </Card>
  );
}

export default ExpenseItem;
