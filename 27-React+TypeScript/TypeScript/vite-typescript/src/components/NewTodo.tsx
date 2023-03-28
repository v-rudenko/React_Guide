import React, { useRef } from "react";
import classes from "./NewTodo.module.css"

type Props = {
  onAddTodo: (text:string) => void;
};

const NewTodo = (props: Props) => {

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
