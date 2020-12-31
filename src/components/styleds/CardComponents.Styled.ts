import styled from 'styled-components';

export const CardContainerHome = styled.div`
  width: 100%;
  padding: 0 10%;
  height: 450px;
  background-color: #fff;
  margin: 100px;


  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
`
export const CardsInfoBot = styled.div`
  width: 50.33%;
  height: 50%;
  margin: 30px;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;


  span{
    color: #e63946;
    font-size: 3.3rem;
  }

  h1{
    color: #e63946;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p{
    font-size: 0.9rem;
    font-weight: 500;
    color: #282A36;
    text-align: left;
  }

  @media(max-width: 450px){
    width: 80px;

    h1{
      font-size: 1.0rem;
    }
    p{
      font-size: 0.7rem;
    }
    span{
      font-size: 2.5rem;
    }
  }
`
export const CardImage = styled.div`
  width: 100%;
  height: 357px;
  border-radius: 9px 9px 0px 0px;
  background-image: url(${prop => prop.uri || "https://media.istockphoto.com/vectors/car-flat-icon-vector-id1144092062?b=1&k=6&m=1144092062&s=612x612&w=0&h=zMH-_u3shpUjbCFQiewi6AhSItMmtI-MMVsayqeHRpc="});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: 0.9s;

  :hover{
    transform: perspective(700px)
		translate(0px,-5px);
	  transform-origin: center 37%;
  }

`;



export const Card = styled.div`
  background-color: #fff;
  width: 270px;
  height: 429px;

  border-radius: 9px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.25s;
  display: flex;
  justify-content: space-space-around;
  align-items: center;
  flex-direction: column;

  h4{
    color: #282A36;
    font-size: 1.1rem;
    line-height: 1.5;
  }
  h5{
    font-size: 0.8rem;
    color: #e63946;
  }
  h6{
    color: #282A36;
    font-size: 20px;
  }

  :hover{
    transform: perspective(700px)
		translate(0px,-5px);
	  transform-origin: center 37%;
  }




`;

export const CardSeparaTop = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;

  h4{
    font-weight: 700;
    font-size: 1.5rem;
  }
  h5{
    font-weight: 500;
    font-size: 1.1rem;
  }
`
export const CardSeparaBot = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`


export const CardImageService = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${prop => prop.uri || "https://media.istockphoto.com/vectors/car-flat-icon-vector-id1144092062?b=1&k=6&m=1144092062&s=612x612&w=0&h=zMH-_u3shpUjbCFQiewi6AhSItMmtI-MMVsayqeHRpc="});
  background-repeat: no-repeat;
  background-size: cover;

`;

export const CardInfo = styled.div`
  width: 100%;
  
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h4{
    font-size: 1.5rem;
  }
  h5{
    font-size: 1.2rem;
  }

`;

