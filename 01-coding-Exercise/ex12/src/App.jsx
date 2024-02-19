import React, { useState } from 'react';
import "./styles.css"

// don't change the Component name "App"
export default function App() {
  const [activated, setActivated] = useState(false);
  const activateHandler = () => {
    setActivated(prevState => !prevState);
  }
    return (
        <div>
            <p className={activated && "active"}>Style me!</p>
            <button onClick={activateHandler}>Toggle style</button>
        </div>
    );
}
