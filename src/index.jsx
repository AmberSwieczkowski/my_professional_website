import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

