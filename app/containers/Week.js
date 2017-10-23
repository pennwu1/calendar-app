import React, { Component } from 'react';
import Day from '../components/Day';
import { connect } from 'react-redux';
import { getDays } from '../actions/actions';
const moment = require('moment');

class Week extends Component {
  componentDidMount() {
    this.props.getDays(this.props.weeks);
  }
  render() {
    const days = this.props.days;
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

function mapState(state) {
  return {
    weeks: state.date.currentWeeks,
    days: state.date.currentDays
  }
}

function mapDispatch(dispatch) {
  return {
    getDays: (weeks) => dispatch(getDays(weeks))
  }
}

export default connect(mapState, mapDispatch)(Week);