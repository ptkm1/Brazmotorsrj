import styled from 'styled-components';

export const ButtonBlack = styled.button`
  width: ${prop => prop.width || "90%"};
  height: ${prop => prop.height || "50px"};
  background: black;
  border: 1px solid black;
  box-sizing: border-box;
  margin-top: 15px;
  cursor: pointer;
  color: white;

  :hover{
    background: white;
    color: black;
    transition: 0.5s;
  }
`;

export const ButtonBlackBorder = styled.button`
  width: ${prop => prop.width || "80%"};
  height: ${prop => prop.height || "50px"};
  background: #000000;
  border: 1px solid #fff;
  box-sizing: border-box;
  margin-top: 15px;
  cursor: pointer;
  color: white;

  :hover{
    background: white;
    color: black;
    transition: 0.5s;
  }
`;
