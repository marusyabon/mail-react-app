"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './router';

import './assets/App.less';
import combinedReducer from './redux/reducers.js';

let store=createStore(combinedReducer);

ReactDOM.render( 
    <Provider store={store}>
        <Router />
    </Provider>
, document.getElementById('container') );
