import React, { Component } from 'react'
import classNames from 'classnames';
import styles from './scss/Header.scss';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';

const moment = require('moment');
const cx = classNames.bind(styles);

export default class Header extends Component {
  render() {
    const { year, month } = this.props.calendar;
    const { lastMonth, nextMonth } = this.props.actions;
    const monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
      <div className={cx('header')}>
        <MdChevronLeft onClick={() => lastMonth(year, month)} />
        <h1>{`${monthStrings[month]} ${year}`}</h1>
        <MdChevronRight onClick={() => nextMonth(year, month)} />
      </div>
    )
  }
}