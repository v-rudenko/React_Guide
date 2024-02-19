////////////////////////////////////////////////
// Expenses.js
////////////////////////////////////////////////


import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.items;

  const [selectedYear, setSelectedYear] = useState('2020')

  const filterSavedHandler = (year) => {
    setSelectedYear(year);
    // console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onFilterSaved={filterSavedHandler}/>
        <h1>Selected year: {selectedYear}</h1>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
