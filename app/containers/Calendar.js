import React, { Component } from 'react';
import Week from '../containers/Week';
import Day from '../components/Day';
import { connect } from 'react-redux';
import { getWeeks } from '../actions/actions';

import classNames from 'classnames/bind';
import styles from './scss/Calendar.scss';

const moment = require('moment');
const cx = classNames.bind(styles);

class Calendar extends Component {
  
  componentDidMount() {
    this.props.getWeeks(this.props.month);
  }
  render() {
    const headings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const headingColumns = headings.map((day) => {
      return (
        <td key={day}>{day}</td>
      );
    });
    const weekColumns = this.props.weeks.map((week, i) => {
      return (
        <Week key={week} week={week} weekNumber={i}/>
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

function mapState(state) {
  return {
    month: state.date.currentMonth,
    weeks: state.date.currentWeeks
  }
}

function mapDispatch(dispatch) {
  // reducers are pure functions
  return {
    getWeeks: (month) => dispatch(getWeeks(month))
  }
}

export default connect(mapState, mapDispatch)(Calendar);