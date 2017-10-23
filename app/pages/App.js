import React, { Component } from 'react';
import Header from '../containers/Header';
import Calendar from '../components/Calendar';

import classNames from 'classnames';
import styles from './scss/App.scss';
const cx = classNames.bind(styles);

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Calendar />
      </div>
    )
  }
}