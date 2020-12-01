import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'
import axios from 'axios'


/* AXIOS SETTINGS */
/* Switch URL of API for DEV or PROD */
axios.defaults.baseURL = process.env.NODE_ENV === "production"
  ? 'https://janmanuelbrenner.de/tb'
  : "/tb"



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
