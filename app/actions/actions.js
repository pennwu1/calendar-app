// execute last month with createCalendar
export const SELECT_DAY = 'SELECT_DAY';
export const selectDay = function(day) {
  return {
    type: SELECT_DAY,
    selectedDay: day
  }
}

export const LAST_MONTH = 'LAST_MONTH';

export const lastMonth = function(year, month) {
  if (month === 1) {
    --year;
    month = 12;
  } else --month;
  return {
    type: LAST_MONTH,
    calendar: createCalendar(year, month)
  }
}

// execute next month with createCalendar
export const NEXT_MONTH = 'NEXT_MONTH';

export const nextMonth = function(year, month) {
  if (month === 12) {
    ++year;
    month = 0;
  } else ++month;
  return {
    type: NEXT_MONTH,
    calendar: createCalendar(year, month)
  }
}

// return new state for calendar
export const createCalendar = function(year, month) {
  const firstDay = getFirstDayInMonth(year, month);
  const numDays = getDaysInMonth(year, month);
  const dayMatrix = buildDayMatrix(firstDay, numDays);
  return {
    selectedDay: 1,
    year,
    month,
    firstDay,
    numDays,
    dayMatrix
  }
}

// return a nested array where position corresponds to day of week
function buildDayMatrix(firstDay, numDays) {
  let matrix = [];
  let weeks = Math.ceil(numDays + firstDay) / 7;
  let firstWeek = [];
  let i = 1;

  // add first week to matrix
  while (firstWeek.length < 7) {
    if (firstWeek.length < firstDay) firstWeek.push(null);
    else firstWeek.push(i++);
  }
  matrix.push(firstWeek);
  
  // add weeks - 1 to matrix
  while (matrix.length < weeks - 1) {
    let nextWeek = [];
    while (nextWeek.length < 7) {
      nextWeek.push(i++);
    }
    matrix.push(nextWeek);
  }

  // add last week to matrix
  let lastWeek = [];
  while (lastWeek.length < 7) {
    if (i > numDays) lastWeek.push(null);
    else lastWeek.push(i++);
  }
  matrix.push(lastWeek);

  return matrix;
}

// get # of days in given month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// get position of first day in month
function getFirstDayInMonth(year, month) {
  return new Date(year, month, 1).getDay();
}