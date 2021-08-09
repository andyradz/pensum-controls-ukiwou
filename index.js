import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Licznik from './useLocalStorageState';

ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<Licznik />, document.querySelector('#root'));
