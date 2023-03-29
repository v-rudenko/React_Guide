import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
    // console.log(enteredValue);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      return;
    }

    const enteredValue = nameInputRef.current.value;

    console.log(enteredName);
    console.log(enteredValue);

    setEnteredName("");
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
          value={enteredName}
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
