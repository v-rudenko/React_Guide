import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
  const [price, setPrice] = useState(100);

  const discountHandler = () => {
    setPrice(75);
  };

  return (
    <div>
      <p>{`$${price}`}</p>
      <button onClick={discountHandler}>Apply Discount</button>
    </div>
  );
}
