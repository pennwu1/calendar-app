import React, { Component } from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import classNames from 'classnames';
import styles from './scss/App.scss';
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const { calendar, actions } = this.props;
    return (
      <div id="App">
        <Header calendar={calendar} actions={actions}/>
        <Calendar calendar={calendar} actions={actions}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    calendar: state.calendar
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect (mapState, mapDispatch)(App);