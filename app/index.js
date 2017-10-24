import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './pages/App';
import configureStore from './store/configureStore';

const initialState = {};
const store = configureStore(initialState);

render(
  <AppContainer>
    <Provider store={ store }>
      <App />
    </Provider>
  </AppContainer>, document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./pages/App', () => { render(App) })
}