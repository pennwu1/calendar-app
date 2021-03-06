import React, { Component } from 'react';
import Day from './Day';

import classNames from 'classnames/bind';
import styles from './scss/Calendar.scss';

const moment = require('moment');
const cx = classNames.bind(styles);

export default class Calendar extends Component {
  constructor(props) {
    super(props);
  }
  renderWeek(week, i) {
    return (
      <tr key={i} className={cx('weeks')}>
        {
          week.map((day, j) => {
          if (day) {
            let selectDay = this.props.actions.selectDay.bind(null, day);
            return <td key={j} onClick={selectDay}>{day}</td>
          }
          return <td key={j}></td>
        })
        }
      </tr>
    )
  }
render() {
  const headings = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const { dayMatrix } = this.props.calendar;
  const { selectDay } = this.props.actions;
  const headingColumns = headings.map((day, i) => {
    return (
      <td key={i}>{day}</td>
    );
  });
  return (
    <table className={cx('calendar')}>
      <tbody>
        <tr className={cx('headings')}>
          {headingColumns}
        </tr>
          {dayMatrix.map(this.renderWeek.bind(this))}
      </tbody>
    </table>
  );
  }
}