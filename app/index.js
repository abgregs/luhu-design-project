var React = require('react');
var ReactDOM = require('react-dom');
require('./main.scss');
var App = require('./components/App');
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
  <App />
</BrowserRouter>),
  document.getElementById('app')
);
