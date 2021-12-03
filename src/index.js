import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as BR }  from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import MainContest from './Component/store/Context'

ReactDOM.render(
  <BR>
    <MainContest>
    <App />
    </MainContest>
  </BR>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();