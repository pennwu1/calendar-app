import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDate } from '../actions/actions';
import classNames from 'classnames';

import styles from './scss/Header.scss';
const moment = require('moment');
const cx = classNames.bind(styles);

class Header extends Component {
  componentDidMount() {
    setTimeout(() => {this.props.getDate}, 1000);
  }
  render() {
    return (
      <div className={cx('header')}>
        <i className="icon arrow-left"></i>
        <h1>{moment(this.props.date).format('MMMM YYYY')}</h1>
        <button>Forward</button>
      </div>
    )
  }
}

/*
  - Add Event Button
  - Toggle Week Buttons
  - This Week's Dates
*/
function mapState(state) {
  return {
    date: state.date.currentDate
  }
}

function mapDispatch(dispatch) {
  return {
    getDate: () => dispatch(getDate())
  }
}

export default connect(mapState, mapDispatch)(Header);
