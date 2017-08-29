import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
//for bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

//for components
import  ReadProductsComponent from './Read_products';
ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
