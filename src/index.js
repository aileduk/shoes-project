import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Global } from './resetStyle'
import { Provider } from 'react-redux';
import { store } from './redux/store/index'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Global />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)