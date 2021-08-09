import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import ToDoManager from './todos';

ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<ToDoManager />, document.querySelector('#root'));
