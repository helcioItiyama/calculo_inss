import React, { Component } from 'react'
import { Container } from './styles'
import { formattedPrice, formattedNumber } from '../../utils/format';

export default class InputReadOnly extends Component {
  render() {
    const {inputId, lable, inputValue, percentage, color } = this.props

    return (
      <Container>
        <label htmlFor={inputId}>{lable}</label>
        <div>
          <input 
            id={inputId} 
            type="text" 
            value={formattedPrice(inputValue)} 
            style={{color:`${color}`}}
            readOnly/>
          {percentage && <span style={{color:`${color}`}}>( {formattedNumber(percentage)} % )</span>}
        </div>
      </Container>
    )
  }
}
