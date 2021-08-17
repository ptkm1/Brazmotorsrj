import styled from 'styled-components'

export const Footer = styled.div`
  width: 100%; 
  height: 25%;
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img{
    width: 300px;
  }

  a{
    color: white;
    text-decoration: none;
  }


  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

     a{
      color: white;
      text-decoration: none;
      font-size: 17px;
      width: 70%;
    }

  }

`
export const ItemsTop = styled.div`
  height: 80%;
  text-align: center;

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    margin: 5px;
  }

  span{
    font-size: 40px;
    margin: 10px;
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
  justify-content: center;

  p{
      color: black;
      font-size: 15px;

    @media (max-width: 450px){
      font-size: 12px;
    }

  }

  a{
    font-size: 15px;

    @media (max-width: 450px){
      font-size: 13px;
    }
  }
`
