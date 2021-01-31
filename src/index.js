import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import Header from './subtemplates/Header';
import Footer from './subtemplates/Footer';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';

import store from "./store";

const $Header = document.getElementById('header');
const $Footer = document.getElementById('footer');

render(<Header />, $Header )
render(<Footer />, $Footer )

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

