import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import Footer from './Footer';


ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </>,
  document.getElementById('root')

);

