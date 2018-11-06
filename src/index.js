import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import "mdbreact/dist/css/mdb.css";
import registerServiceWorker from './registerServiceWorker';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
