const moment = require('moment');

export const GET_MONTH = 'GET_MONTH';

export const getMonth = function() {
  return {
    type: GET_MONTH,
    month: moment()
  }
}

export const LAST_MONTH = 'LAST_MONTH';

export const lastMonth = function(month) {
  let lastMonth = month.clone().subtract(1, 'months');
  return {
    type: LAST_MONTH,
    month: lastMonth
  }
}

export const NEXT_MONTH = 'NEXT_MONTH';

export const nextMonth = function(month) {
  let nextMonth = month.clone().add(1, 'months');
  return {
    type: NEXT_MONTH,
    month: nextMonth
  }
}

export const GET_WEEKS = 'GET_WEEKS';

export const getWeeks = function (month) {
  let firstWeek = month.startOf('month').startOf('week');
  let lastWeek = month.clone().endOf('month').startOf('week');
  let weeks = weeksInMonth(firstWeek, lastWeek);
  console.log('weeks', weeks);
  return {
    type: GET_WEEKS,
    weeks
  }
}

export const GET_DAYS = 'GET_DAYS';

export const getDays = function (week, weekNumber) {
  let firstDay = week.clone().startOf('week');
  let lastDay = week.clone().endOf('week');
  let days = daysInWeek(firstDay, lastDay);
  console.log('days', days);
  return {
    type: GET_DAYS,
    days,
    weekNumber
  }
}

function weeksInMonth(startDate, endDate) {
  const dates = [];
  let now = startDate.clone();
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    dates.push(now.clone());
    now.add(1, 'weeks');
  }
  return dates;
}

function daysInWeek(startDate, endDate) {
  const dates = [];
  let now = startDate.clone();
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    dates.push(now.clone());
    now.add(1, 'days');
  }
  return dates;
}