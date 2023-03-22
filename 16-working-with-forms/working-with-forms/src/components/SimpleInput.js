import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {/* <input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} /> */}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
