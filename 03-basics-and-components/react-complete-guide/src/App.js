import React from "react"; // Застарілий імпорт, в сучасних версіях робити не потрібно
import Expenses from "./components/Expenses/Expenses";

const App = () => {    // Стрілочна нотація замість слова function
  const expenses = [
    {
      id: "e1",
      title: "Туалетний папір",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Телевізор",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Страхування авто",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Новий стіл (дерев'яний)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(     //Для розуміння яка створюються елементи "Під капотом"
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Гайда починати!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
