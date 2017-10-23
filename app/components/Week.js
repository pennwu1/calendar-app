import React, { Component } from 'react';
import Day from './Day';
const moment = require('moment');

export default class Week extends Component {
  render() {
    const days = renderDays(this.props.week);
    const dayColumns = days.map((day) => {
      return (
        <Day key={day} day={moment(day).format('D')}/>
      );
    });
    return (
      <tr>{dayColumns}</tr>
    )
  }
}

function renderDays(week) {
  let firstDay = moment(week).startOf('week');
  let lastDay = moment(week).endOf('week');
  let days = daysInWeek(firstDay, lastDay);
  return days;
}

function daysInWeek(startDate, endDate) {
  const dates = [];
  let now = startDate.clone();
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    // depreciated format
    dates.push(now.format('M/D/YYYY'));
    now.add(1, 'days');
  }
  return dates;
}