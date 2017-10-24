import React, { Component } from 'react';
import Day from '../components/Day';
import { connect } from 'react-redux';
import { getDays } from '../actions/actions';
const moment = require('moment');

class Week extends Component {
  componentWillMount() {
    this.props.getDays(this.props.week, this.props.weekNumber);
  }
  render() {
    const days = this.props.days[this.props.weekNumber];
    const dayColumns = days.map((day) => {
      return (
        <Day key={day} day={day.format('D')}/>
      );
    });
    return (
      <tr>{dayColumns}</tr>
    )
  }
}

function mapState(state) {
  return {
    days: state.date.currentDays
  }
}

function mapDispatch(dispatch) {
  return {
    getDays: (week, weekNumber) => dispatch(getDays(week, weekNumber))
  }
}

export default connect(mapState, mapDispatch)(Week);