import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  
  img {
    object-fit: fill;
  }

`;
// MAIN PART
export const FirstSection = styled.div`
  background-color: #fff;
  width: 100%;
  height: max-content;
  padding: 70px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #44475a;
  }
  h2 {
    color: #282a36;
    border-bottom: solid #e63946 4px;
    margin-top: 25px;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const SecondSection = styled.div`
  background-color: #fff; 
  width: 100%;
  height: max-content;
  padding: 70px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  align-content: center;
  justify-items: center;

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
  }
`;

export const CentralizeText = styled.div`
  width: 100%;
  height: max-content;
  padding: 70px 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 2.3rem;
    margin-bottom: 35px;
    color: #44475a;
  }
  p{
    font-size: 1.1rem;
    color: #44475a;
  }
`;


export const Footer = styled.div`
  width: 100%;
  height: max-content;
  padding: 70px 100px;
  background-color: #282a36;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;

  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const ItemsFooter = styled.div`
  display: flex;
  align-items: center;

  ul{
    list-style: none;
  }

`;
