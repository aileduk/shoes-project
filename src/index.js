import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Global } from './resetStyle'

ReactDOM.render(
    <React.StrictMode>
        <Global />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)