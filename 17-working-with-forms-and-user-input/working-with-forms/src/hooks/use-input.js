import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsEmpty = enteredValue.trim() === "";

  const valueIsValid = validateValue(enteredValue);
 
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(false);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  } 


  return {
    value: enteredValue,
    isValid: valueIsValid,
    isEmpty: valueIsEmpty,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };

}
export default useInput