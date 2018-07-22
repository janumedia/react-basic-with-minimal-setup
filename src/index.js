import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
    <App guestname="World"/>,
    document.getElementById('app')
);

//default webpack hot module replacement without ejecting / reload all DOM
if(module.hot) {
    module.hot.accept();
}