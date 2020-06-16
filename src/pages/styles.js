import styled from 'styled-components';

export const Header = styled.header `
  text-align: center;
  padding: 8px;
  margin-top: 40px;
  background-color: #7FFFD4;
  box-shadow: 1px 1px 20px 8px #16a085 inset;

`;

export const Section = styled.div `
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr)
`;

export const Footer = styled.footer `
  width: 100%;
  margin-top: 100px;
  display: flex;
`
