import React, { Component } from 'react'

import { Container } from './styles.js';

export default class index extends Component {
  render() {
    const {inputId, inputValue, onHandleChange, label} = this.props;
    
    return(
      <Container>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} type="number" value={inputValue} onChange={onHandleChange}/>
      </Container>
    )
  }
}
