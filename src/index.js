import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom"
import App from './TodoList/App';
import ReactRouter from "./router/index"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><ReactRouter /></Router>, document.getElementById('root'));
registerServiceWorker();
