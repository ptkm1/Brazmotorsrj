import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`

export const ContainerWhats = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: #fff;
    position: fixed;
    margin-top: 5px;
    margin-right: 5px;
    right: 10px;
    bottom: 5vh;
    z-index:11;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-size: 60px;
        text-align: center;
        color: #25D366;
        margin-top: 10px;
        animation: 1s ${fadeIn} infinite;

        :hover{
            color: #075E54;
        }
        
    }
`;