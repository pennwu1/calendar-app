const moment = require('moment');
export const GET_DATE = 'GET_DATE'

export const getDate = function () {
  return {
    type: 'GET_DATE',
    date: moment()
  }
}
