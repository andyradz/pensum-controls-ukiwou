import React from 'react';

import { Link } from 'react-router-dom';

const CoffeeRouting = () => {
  return (
    <>
      <h1>Type of coffees:</h1>
      <ul>
        <li>
          <Link to="/coffee/hot">Hot Coffees</Link>
        </li>
        <li>
          <Link to="/coffee/iced">Cold coffees</Link>
        </li>
      </ul>
    </>
  );
};

export default CoffeeRouting;
