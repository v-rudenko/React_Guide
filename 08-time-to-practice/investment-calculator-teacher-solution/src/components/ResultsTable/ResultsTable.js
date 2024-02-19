import classes from "./ResultsTable.module.css";

const ResultsTable = ({ dataSet }) => {

  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


  const tableOutput = dataSet.map((row) => (
    <tr key={row.year}>
      <td>{row.year}</td>
      <td>{formatter.format(row.savingsEndOfYear)}</td>
      <td>{formatter.format(row.yearlyInterest)}</td>
      <td>{formatter.format(row.totalInterest)}</td>
      <td>{formatter.format(row.investedCapital)}</td>
    </tr>
  ));
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableOutput}
      </tbody>
    </table>
  );
};
export default ResultsTable;
