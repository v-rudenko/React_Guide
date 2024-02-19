import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    valueChangeHandler: firstNameValueChangeHandler,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    isEmpty: firstNameIsEmpty,
    isValid: firstNameIsValid,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    valueChangeHandler: lastNameValueChangeHandler,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    isEmpty: lastNameIsEmpty,
    isValid: lastNameIsValid,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    valueChangeHandler: emailValueChangeHandler,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    isEmpty: emailIsEmpty,
    isValid: emailIsValid,
  } = useInput((value) =>
    value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  );

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameValueChangeHandler}
            value={firstNameValue}
            type="text"
            id="name"
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && firstNameIsEmpty ? (
            <p className="error-text">First Name must not be empty.</p>
          ) : null}
          <></>
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lastNameValue}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="name"
          />
          {lastNameHasError && lastNameIsEmpty ? (
            <p className="error-text">Last Name must not be empty.</p>
          ) : null}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={emailValue}
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
        />
        {emailHasError &&
          (emailIsEmpty ? (
            <p className="error-text">Email Name must not be empty.</p>
          ) : (
            <p className="error-text">Email is invalid.</p>
          ))}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
