import React from 'react';
import ReactDom from 'react-dom';
import "./index.css"
import {BrowserRouter} from 'react-router-dom';
import App from './Components/App/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {} from 'react-redux'
import store from './app/store'
import { Provider } from 'react-redux';

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);