import React from 'react';
import React, { useState, useEffect } from 'react';

import './main.css';

const Clock = props => {
  const [data, setData] = useState({
    date: new Date(),
    label: 'Zegar cyfrowy',
    css: 'empty',
    timerID: 0
  });

  useEffect(() => {
    document.title = new Date();
    setData({ ...data, timerID: setInterval(() => tick(), 1000) });

    return () => {
      document.title = new Date();
      clearInterval(data.timerID);
    };
  }, [data.css]);

  const tick = () => {
    setData({ ...data, date: new Date() });
  };

  const handleClick = () => {
    setData({
      ...data,
      date: new Date(),
      css: data.css == 'clickedclock' ? '' : 'clickedclock'
    });
  };

  return (
    <div id="clockwrapper" className={data.css} onClick={handleClick}>
      <h1>{data.date.toLocaleTimeString()}</h1>
      <h2>{data.label}</h2>
    </div>
  );
};

export default Clock;
