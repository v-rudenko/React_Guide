import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    isEmpty: enteredEmailIsEmpty,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
  );

  // const [enteredEmail, setEnteredEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  // const [emailErrorText, setEmailErrorText] = useState("");

  // const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // Спосіб з використанням стану

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  //   if (showEmailError) {
  //     setShowEmailError(false);
  //   }
  // };

  // const emailInputBlurHandler = () => {
  //   if (enteredEmail.trim() === "") {
  //     setShowEmailError(true);
  //     setEmailErrorText("Email must not be empty");
  //     setEnteredEmailIsValid(false);
  //   } else if (
  //     !enteredEmail.match(
  //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //     )
  //   ) {
  //     setShowEmailError(true);
  //     setEmailErrorText("Email is invalid");
  //     // setEnteredEmailIsValid(false);
  //   } else {
  //     setShowEmailError(false);
  //     setEmailErrorText("");
  //     // setEnteredEmailIsValid(true);
  //   }
  // };
  const emailErrorText = enteredEmailIsEmpty ? "Email must not be empty" : "Email is invalid";

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">{emailErrorText}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
