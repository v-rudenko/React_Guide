import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [message, setMessage] = useState("")

  const keyHandler = (event) => {
    setMessage(event.target.value)
      // console.log(message.trim().length)
  }


    return (
        <form>
            <label>Your message</label>
            <input value={message} onChange={keyHandler} type="text" />
            <p>{message.trim().length < 3 ? "Invalid message" : "Valid message"}</p>
        </form>
    );
}