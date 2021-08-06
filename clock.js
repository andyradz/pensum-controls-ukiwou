import React from 'react';
import React, { useState, useEffect } from 'react';

import './clock.css';

const Clock = props => {
  const [data, setData] = useState({
    date: new Date(),
    label: 'Zegar cyfrowy',
    timerID: 0
  });

  const [css, setCss] = useState('');

  useEffect(() => {
    document.title = new Date();
    setData({ ...data, timerID: setInterval(() => tick(), 1000) });

    return () => {
      document.title = new Date();
      clearInterval(data.timerID);
    };
  }, [css]);

  const tick = () => {
    setData({ ...data, date: new Date() });
  };

  const handleClick = () => {
    setCss(css === '' ? 'clickedclock' : '');
  };

  return (
    <div id="clock">
      <div id="clockwrapper" className={css} onClick={handleClick}>
        <h1>{data.date.toLocaleTimeString()}</h1>
        <h2>{data.label}</h2>
      </div>
    </div>
  );
};

export default Clock;
