import React, { Component } from 'react'

import { ColorBar } from './styles';

export default class index extends Component {
  render() {
    const { color, bar } = this.props;
    return (
      <ColorBar style={{backgroundColor:`${color}`, width:`${bar}%`}} />
    )
  }
}
