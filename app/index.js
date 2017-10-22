import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './pages/App';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <AppContainer>
    <App store={ store }/>
  </AppContainer>, document.getElementById('root')
);