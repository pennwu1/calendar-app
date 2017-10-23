import React, { Component } from 'react';
const moment = require('moment');

export default class Day extends Component {
  render() {
    return (
      <td>{this.props.day}</td>
    );
  }
}