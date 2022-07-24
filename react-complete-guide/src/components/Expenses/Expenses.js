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

  const filterSavedHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  console.log(expensesContent);

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterSaved={filterSavedHandler}
        />

        {expensesContent}

        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}

        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        <h1>Selected year: {selectedYear}</h1>
      </Card>
    </div>
  );
};

export default Expenses;
