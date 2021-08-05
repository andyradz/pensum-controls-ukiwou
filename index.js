import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import Counter from './counter';
import Clock from './clock';
import ArticleList from './articles';
import TemperatureCalculator from './temperatureCalculator';
import CustomGrid from './codigoCustomGrid';

import taskQueue from './processing';

ReactDOM.render(<Demo />, document.querySelector('#root'));
ReactDOM.render(<Counter />, document.querySelector('#counter'));
ReactDOM.render(<Clock />, document.querySelector('#clock'));
ReactDOM.render(<ArticleList />, document.querySelector('#articles'));
ReactDOM.render(<CustomGrid />, document.querySelector('#grid'));
ReactDOM.render(
  <TemperatureCalculator />,
  document.querySelector('#temperature')
);

taskQueue.runTasks().then(([res1, res2, res3, res4]) => {
  console.log(res1, res2, res3, res4);
});
