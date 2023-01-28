import React from 'react';

import Product from './Product';
import './App.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title={"Product 1"} price={"10"} description={"First product"} />
            <Product title={"Product 2"} price={"20"} description={"Second product"} />
        </div>
    );
}