import React from 'react';
import {render} from 'react-dom';
// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/Router";
import './css/bootstrap-reboot.css';
import './css/bootstrap-grid.css';
import './css/bootstrap.css';

// import StorePicker from './components/StorePicker';

// ReactDOM.render(<App />, document.getElementById('main'));
render(<Router/>, document.querySelector('#main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
