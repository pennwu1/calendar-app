import React, { Component } from 'react';
import Week from '../components/Week';
import Day from '../components/Day';
import classNames from 'classnames/bind';
import styles from './scss/Calendar.scss';

const moment = require('moment');
const cx = classNames.bind(styles);

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: renderWeeks()
    }
  }
  
  render() {
    const headings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const headingColumns = headings.map((day) => {
      return (
        <td key={day}>{day}</td>
      );
    });
    const weeks = renderWeeks();
    const weekColumns = weeks.map((week) => {
      return (
        <Week key={week} week={week} />
      );
    });
    return (
      <table className={cx('calendar')}>
        <tbody>
          <tr className={cx('headings')}>
            {headingColumns}
          </tr>
            {weekColumns}
        </tbody>
      </table>
    );
  }
}

function renderWeeks() {
  let firstWeek = moment().clone().startOf('month').startOf('week');
  let lastWeek = moment().clone().endOf('month').startOf('week');
  return weeksInMonth(firstWeek, lastWeek);
}

function weeksInMonth(startDate, endDate) {
  const dates = [];
  let now = startDate.clone();
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    dates.push(now.format('M/D/YYYY'));
    now.add(1, 'weeks');
  }
  return dates;
}