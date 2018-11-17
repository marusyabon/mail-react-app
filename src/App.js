"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MailNav from './components/MailNav/MailNav';
import './assets/App.less';

import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';

ReactDOM.render( 
  <BrowserRouter>
    <div className="MailBox">
      <div className="Flex">
        <MailNav />
        <PagesRouter />
      </div>
    </div>
  </BrowserRouter>
, document.getElementById('container') );