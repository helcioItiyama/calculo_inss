import styled from 'styled-components';

export const Container = styled.div `
  margin: 0 auto;
  margin-top: 60px;
  width: 230px;
  border-bottom: 2px solid #999999;

  label {
    color: #999999; 
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    input {
      font-weight: bold;
      border: none;
      width: 90px;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    span {
      font-weight: bold;
      font-size: 14px;
    }
  }

`