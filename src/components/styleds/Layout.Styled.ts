import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #e63946;
  }

  
  @media (max-width: 500px) {
    margin: 0 auto;
    padding-top: 170px;
  }

`;

export const Header = styled.div`
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  padding-top: 65px;


@media (max-width: 500px) {
      margin: 0 auto;
      height: 500px;

      iframe {
        height: 360px;
        margin-bottom: 150px;
        margin-top: 50px;
      }

`;


export const HeroImage = styled.div`

`;

// MAIN PART
export const FirstSection = styled.div`
  width: 100%;
  height: max-content;
  padding: 70px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: black;
  }
  h2 {
    color: #282a36;
    border-bottom: solid #e63946 4px;
    margin-top: 25px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media(max-width: 425px){
    padding: 40px;
    margin-top: -200px;
  }
`;

export const SecondSection = styled.div`
  width: 80%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  align-content: center;
  justify-items: center;
  justify-content: center;
  
  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 450px){
    width: 100%;
    align-items: center;
  }
`;


export const CentralizeText = stylimport styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #e63946;
  }

  
  @media (max-width: 500px) {
    margin: 0 auto;
    padding-top: 170px;
  }

`;

export const Header = styled.div`
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  padding-top: 65px;


@media (max-width: 500px) {
      margin: 0 auto;
      height: 500px;

      iframe {
        height: 360px;
        margin-bottom: 150px;
        margin-top: 50px;
      }

`;


export const HeroImage = styled.div`

`;

// MAIN PART
export const FirstSection = styled.div`
  width: 100%;
  height: max-content;
  padding: 70px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: black;
  }
  h2 {
    color: #282a36;
    border-bottom: solid #e63946 4px;
    margin-top: 25px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media(max-width: 425px){
    padding: 40px;
    margin-top: -200px;
  }
`;

export const SecondSection = styled.div`
  width: 80%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  align-content: center;
  justify-items: center;
  justify-content: center;
  
  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 450px){
    width: 100%;
    align-items: center;
  }
`;


export const CentralizeText = styled.div`
  width: 100%;
  height: max-content;
  padding: 70px 100px;
  background-color: #F2F3F8;
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

export const CardsContainerHome = styled.div`
  width: 80%;
  height: 500px;
  margin-top: 70px; 
  margin-bottom: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardInfoHome = styled.div`
  width: 300px;
  height: 375px;
  padding: 15px;
  background-color: #fff;
  border-radius: 9px;
  word-break: break-all;

  box-shadow: 1px 1px 4px #C0C0C0;

  display: flex;
  flex-direction: column;

  h1{
    font-size: 1.5rem;
    text-align: justify;
    color: #282A36;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  p{
    font-size: 1.2rem;
    color: black;
    text-align: left;
    
  }
`
export const IconInfo = styled.div`
  width: 35px;
  height: 35px;
  background-color: #e63946;
  border-radius: 9px;
`
