import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
