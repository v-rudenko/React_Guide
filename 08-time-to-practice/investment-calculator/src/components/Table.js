const Table = ({ dataSet }) => {

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
    <table className="result">
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
        {/* <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr> */}
        {tableOutput}
      </tbody>
    </table>
  );
};
export default Table;
