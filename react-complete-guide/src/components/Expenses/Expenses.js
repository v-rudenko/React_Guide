////////////////////////////////////////////////
// Expenses.js
////////////////////////////////////////////////

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const defaultYear = "2021";

  const [selectedYear, setSelectedYear] = useState(defaultYear);

  // Страшна, довга умова. Треба придумати щось краще.

  const [expensesFilteredByYear, setExpensesFilteredByYear] = useState(
    props.items.filter(
      (expense) => expense.date.getFullYear().toString() === defaultYear
    )
  );

  const filterSavedHandler = (year) => {
    setSelectedYear(year);
    setExpensesFilteredByYear(
      props.items.filter(
        (expense) => expense.date.getFullYear().toString() === year
      )
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterSaved={filterSavedHandler}
        />
        {/* {expensesFilteredByYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}


        {/* Це - жахіття */}
        {props.items
          .filter((expense) => expense.date.getFullYear().toString() === selectedYear)
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}

        <h1>Selected year: {selectedYear}</h1>
      </Card>
    </div>
  );
};

export default Expenses;
