import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import './styles/colors.css';
import './styles/navbar.css';

//Redux
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
