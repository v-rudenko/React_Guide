import React, { useState } from 'react';
import "./styles.css"

// don't change the Component name "App"
export default function App() {
  const [showWarning, setShowWarning] = useState(false);
  
  const showWarningHandler = () => {
    setShowWarning(true);
  }
  const hideWarningHandler = () => {
    setShowWarning(false);
  }
    return (
      <div>
        {showWarning && <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={hideWarningHandler}>Proceed</button>
        </div>}
        <button onClick={showWarningHandler}>Delete</button>
      </div>    
    );
}