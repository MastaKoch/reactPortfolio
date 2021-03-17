import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from './components/container';
import container from 'react-bootstrap/Container';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      

    </AppContainer>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
