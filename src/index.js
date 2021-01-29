import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import Header from './subtemplates/Header';
import Footer from './subtemplates/Footer';
import GlobalStyles from './GlobalStyles';
const $Header = document.getElementById('header');
const $Footer = document.getElementById('footer');

render(<Header />, $Header )
render(<Footer />, $Footer )

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

