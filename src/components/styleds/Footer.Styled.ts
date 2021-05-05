import styled from 'styled-components'

export const Footer = styled.div`
  width: 100%; 
  height: max-content;
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  h3{
      font-size: 22px;
      margin: 5px;
  } 

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

     a{
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 17px;
      width: 70%;
    }

    h3{
        font-size: 12px;
        margin: 2px;
    } 

  }

`

export const ItemsFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 200;
  font-family: Arial;
  letter-spacing: 2px;
  font-size: 17px;

  ul{
    list-style: none;
  }

  a{
    font-weight: 200;
    font-family: Arial;
  }

  @media(max-width: 450px){
    margin: 10px;
  }

`

export const ItemsTop = styled.div`
  width: 100%;
  padding: 70px 100px;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content:space-between;
  color: white;

  @media(max-width: 450px){
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`

export const ItemsMid = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;

  display: flex;
  flex-directimport styled from 'styled-components'

export const Footer = styled.div`
  width: 100%; 
  height: max-content;
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  h3{
      font-size: 22px;
      margin: 5px;
  } 

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

     a{
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 17px;
      width: 70%;
    }

    h3{
        font-size: 12px;
        margin: 2px;
    } 

  }

`

export const ItemsFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 200;
  font-family: Arial;
  letter-spacing: 2px;
  font-size: 17px;

  ul{
    list-style: none;
  }

  a{
    font-weight: 200;
    font-family: Arial;
  }

  @media(max-width: 450px){
    margin: 10px;
  }

`

export const ItemsTop = styled.div`
  width: 100%;
  padding: 70px 100px;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content:space-between;
  color: white;

  @media(max-width: 450px){
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`

export const ItemsMid = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
      display: flex;
      flex-direction: row;
  } 

  h2{
      color: black;
      font-size: 40px;
      margin: 2px;
  }
`

export const ItemsBot = styled.div`
  background: #fff;
  width: 100%;
  height: 30px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  p{
      color: black;
      font-size: 15px;
  }
`
