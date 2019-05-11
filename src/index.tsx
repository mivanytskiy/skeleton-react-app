import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const render = () => ReactDOM.render(
    <App history={history} />,
    document.getElementById('root') as HTMLElement,
);

render();
