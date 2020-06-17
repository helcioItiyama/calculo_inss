import React, { Component } from 'react'

import { ColorBar } from './styles';

export default class ProgressBarSalary extends Component {
  render() {
    const { color, bar } = this.props;
    return (
      <ColorBar style={{backgroundColor:`${color}`, width:`${bar}%`}} />
    )
  }
}
