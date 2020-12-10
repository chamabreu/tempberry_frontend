import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';


/* AXIOS SETTINGS */
/* Switch URL of API for DEV or PROD */
axios.defaults.baseURL = process.env.NODE_ENV === "production"
  ? 'https://api.tb.janmanuelbrenner.de/api'
  : "/api"



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
