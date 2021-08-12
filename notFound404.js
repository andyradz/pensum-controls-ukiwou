import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Strona wyświetlana dla błędnego adresu
 */
const notFound404 = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default notFound404;
