import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const mine = require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
console.log(mine)

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);