import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMonth, lastMonth, nextMonth } from '../actions/actions';
import classNames from 'classnames';

import styles from './scss/Header.scss';
const moment = require('moment');
const cx = classNames.bind(styles);

class Header extends Component {
  componentDidMount() {
    this.props.getMonth();
  }
  render() {
    const { month, getMonth, lastMonth, nextMonth } = this.props;
    return (
      <div className={cx('header')}>
        <button onClick={() => lastMonth(month)}>Backward</button>
        <h1>{moment(month).format('MMMM YYYY')}</h1>
        <button onClick={() => nextMonth(month)}>Forward</button>
      </div>
    )
  }
}

/*
  - Add Event Button
  - Toggle Week Buttons
    -- Functions should cause monthly, weekly, daily functions to re-render
  - This Week's Dates
*/
function mapState(state) {
  return {
    month: state.date.currentMonth
  }
}

function mapDispatch(dispatch) {
  return {
    // getDate: () => dispatch(getDate()),
    getMonth: () => dispatch(getMonth()),
    lastMonth: (month) => dispatch(lastMonth(month)),
    nextMonth: (month) => dispatch(nextMonth(month)),
  }
}

export default connect(mapState, mapDispatch)(Header);
