import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(90deg, rgba(85, 84, 84, 0.5), rgba(44, 43, 43, 0.3)), url(assets/IMG-20210127-WA0008.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    background-size: cover;
    background-position: center center;
    background-image: linear-gradient(90deg, rgba(85, 84, 84, 0.5), rgba(44, 43, 43, 0.3)),url("https://i.imgur.com/7lRTGy7.jpg");
    transform: translate3d(0px, 0px, 0px);

    display: flex;
    justify-conimport styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(90deg, rgba(85, 84, 84, 0.5), rgba(44, 43, 43, 0.3)), url(assets/IMG-20210127-WA0008.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    background-size: cover;
    background-position: center center;
    background-image: linear-gradient(90deg, rgba(85, 84, 84, 0.5), rgba(44, 43, 43, 0.3)),url("https://i.imgur.com/7lRTGy7.jpg");
    transform: translate3d(0px, 0px, 0px);

    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        width: 50%;
      }

    @media (max-width: 700px) {
      width: 100vw;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-size: fill;
    position: fixed;
      
    }
`

export const Content = styled.div`
    width: 80%;
    height: 58%;
    max-width: 1280px;

    display: flex;
    align-items:center;

    @media (max-width: 700px) {
      width: 100%;
      flex-direction: column;
    }
`

export const Left = styled.div`
    width: 80%;
    height: 58%;
    max-width: 1280px;

    display: flex;
    color: cornsilk;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
      font-size: 39px;
      font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 100;
      width: 70%;
    }

    a {
      width: 90%;
      height: 55px;
      background-color: cornsilk;
      color: rgb(50, 89, 216);
      cursor: pointer;
      border-radius: 2px;
      margin-top: 20px;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background-color: rgb(197, 194, 194);
      }
    }
    @media (max-width: 700px) {
      width: 100%;
      }

`

export const Right = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    img{
        width: 580px;
    }
    @media (max-width: 700px) {
      width: 100%;
      }


`