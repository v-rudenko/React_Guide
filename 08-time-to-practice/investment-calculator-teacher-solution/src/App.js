import { useState } from "react";
import Form from "./components/UserInput/UserInput";
import Header from "./components/Header/Header";
import Table from "./components/ResultsTable/ResultsTable";

function App() {
  const [calculatedResult, setCalculatedResult] = useState([]);



  const resetHandler = () => {
    console.log("Натиснено кнопку скидання!")
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("current-savings"));
    console.log(data.get("yearly-contribution"));
    console.log(data.get("expected-return"));
    console.log(data.get("duration"));

    console.log(data);
    calculateHandler(data);
  }

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.get("current-savings"); // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.get("yearly-contribution"); // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.get("expected-return") / 100;
    const duration = +userInput.get("duration");

    let totalInterest = 0; 
    let investedCapital = 0;

    // The below code calculates yearly results (total savings, interest etc)

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      // Додано мною
      totalInterest += yearlyInterest; 
      investedCapital = currentSavings - totalInterest;


      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        investedCapital: investedCapital,
      });
    }

    // do something with yearlyData ...
    console.log(yearlyData)
    setCalculatedResult(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onSubmit={submitHandler} onReset={resetHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {calculatedResult.length !==0 ? <Table dataSet={calculatedResult}/> : <h3 className="error">Немає даних для виведення</h3>}
    </div>
  );
}

export default App;
