import React, { Component } from 'react'
import classNames from 'classnames';
import styles from './scss/Header.scss';

const moment = require('moment');
const cx = classNames.bind(styles);

export default class Header extends Component {
  render() {
    const { year, month } = this.props.calendar;
    const { lastMonth, nextMonth } = this.props.actions;
    return (
      <div className={cx('header')}>
        <button onClick={() => lastMonth(year, month) }>Backward</button>
        <h1>{'Month' + ' ' + 'Year'}</h1>
        <button onClick={() => nextMonth(year, month) }>Forward</button>
      </div>
    )
  }
}