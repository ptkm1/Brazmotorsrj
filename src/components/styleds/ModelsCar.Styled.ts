import styled from 'styled-components';

export const CarModels = styled.div`
  display: flex;

  @media (max-width: 700px){
    flex-direction: column;
  }
`;

export const FilterPart = styled.div`

  color: black;
  width: 30%;
  height: 100vh;
  padding: 15px;
  @media (max-width: 700px){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CarsComponents = styled.div`
  color: black;
  width: 70%;

  padding: 15px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;