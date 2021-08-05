import React from 'react';

const TemperatureInput = props => {
  const scaleNames = {
    c: 'Celsjuszach',
    f: 'Fahrenheitach'
  };

  const { scale, value } = props;

  const handleInput = event => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>Podaj temperaturę w {scaleNames[scale]}</legend>
        <input type="number" value={value} onInput={handleInput} />
      </fieldset>
    </div>
  );
};

export default TemperatureInput;
