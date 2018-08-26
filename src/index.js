import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import Carty from './components/Carty/Carty';
import registerServiceWorker from './registerServiceWorker';

var cartyApp = (
    <BrowserRouter>
        <Carty/>
    </BrowserRouter>
);

ReactDOM.render(cartyApp, document.getElementById('carty-app'));
registerServiceWorker();