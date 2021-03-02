import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';

import CountriesList from './components/CountriesList'
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'

import { BrowserRouter, Route, Router } from 'react-router-dom';

ReactDOM.render(
  <div>
    <Navbar />
    <BrowserRouter>
      <CountriesList />
        <Route exact path ='/country/:countryCode' component = {CountryDetails}/> 
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();