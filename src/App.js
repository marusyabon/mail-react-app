"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MailBox from './components/MailBox/MailBox';


// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <MailBox />
, document.getElementById('container') );