require('./index.html');
require('./main.scss');
const React = require('react');
const ReactDOM = require('react-dom');
import App from './app/app';

document.addEventListener('DOMContentLoaded', () => {
	var anchor = document.getElementById('app-anchor');
	ReactDOM.render(<App />, anchor);
});