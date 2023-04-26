import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [showEmailError, setShowEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  const enteredNameIsValid = enteredName.trim() !== "";
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false)
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }



  // Спосіб з використанням стану

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (showEmailError) {
      setShowEmailError(false);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = () => {

    if (enteredEmail.trim() === "") {
      setShowEmailError(true);
      setEmailErrorText("Email must not be empty");
      enteredEmailIsValid(false)
    } else if (
      !enteredEmail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setShowEmailError(true);
      setEmailErrorText("Email is invalid");
      enteredEmailIsValid(false)
    } else {
      setShowEmailError(false);
      setEmailErrorText("");
      setEnteredEmailIsValid(true)
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredEmail("")
    setEnteredNameTouched(false);
  };



  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = showEmailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {showEmailError && <p className="error-text">{emailErrorText}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
