import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Січ', value: 0 },
    { label: 'Лют', value: 0 },
    { label: 'Бер', value: 0 },
    { label: 'Кві', value: 0 },
    { label: 'Тра', value: 0 },
    { label: 'Чер', value: 0 },
    { label: 'Лип', value: 0 },
    { label: 'Сер', value: 0 },
    { label: 'Вер', value: 0 },
    { label: 'Жов', value: 0 },
    { label: 'Лис', value: 0 },
    { label: 'Гру', value: 0 },
  ];

  for (const expense of props.expenses) {   // "of" для масивів, а "in" для об'єктів

    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;