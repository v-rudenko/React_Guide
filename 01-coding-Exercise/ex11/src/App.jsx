import React, { useState } from "react";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [textIsRed, setTextIsRed] = useState(false);

  const paintHandler = () => {
    setTextIsRed((prevState) => !prevState);
  };
  return (
    <div>
      <p style={{ color: `${textIsRed ? "red" : "white"}` }}>Style me!</p>
      <button onClick={paintHandler}>Toggle style</button>
    </div>
  );
}
