const moment = require('moment');
export const GET_DATE = 'GET_DATE'

export const getDate = function () {
  return {
    type: 'GET_DATE',
    date: moment()
  }
}

export const GET_WEEKS = 'GET_WEEKS';

export const getWeeks = function () {
  let firstWeek = moment().clone().startOf('month').startOf('week');
  let lastWeek = moment().clone().endOf('month').startOf('week');
  let weeks = weeksInMonth(firstWeek, lastWeek);
  return {
    type: GET_WEEKS,
    weeks
  }
}

export const GET_DAYS = 'GET_DAYS';

export const getDays = function (week) {
  let firstDay = moment(week).startOf('week');
  let lastDay = moment(week).endOf('week');
  let days = daysInWeek(firstDay, lastDay);
  return {
    type: GET_DAYS,
    days
  }
}

function weeksInMonth(startDate, endDate) {
  const dates = [];
  let now = startDate.clone();
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    // depreciated format
    dates.push(now.format('M/D/YYYY'));
    now.add(1, 'weeks');
  }
  return dates;
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