import React from 'react';

const BoilingVerdict = props => {
  const { celsius } = props;

  if (celsius >= 100) {
    return <p>Woda będzie się gotować</p>;
  }
  return <p>Woda nie będzie się gotować.</p>;
};

export default BoilingVerdict;
