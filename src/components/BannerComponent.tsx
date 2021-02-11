import React from 'react'
import styled, {keyframes} from 'styled-components'

import Banner1 from '../assets/1.png'
import Banner2 from '../assets/2.png'

import { ImgSlide } from '../pages/api/fakeApi'

const fadeIn = keyframes`
  25% {
    opacity: 1;
    transform:scale(1,1)
  }
  50% {
    opacity: 0;
  }

`

const Galeria = styled.div`
    width: 100%;
    height: 500px;
    position: relative;

`
const Foto = styled.img`
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 500px;
        animation: 30s ${fadeIn} infinite; 
        object-fit: cover;


        &:nth-child(1){

        }

        &:nth-child(2){
            animation-delay: 5s;
        } 

        &:nth-child(3){
            animation-delay: 10s;
        } 

        &:nth-child(4){
            animation-delay: 15s;
        } 

        &:nth-child(5){
            animation-delay: 20s;
        } 

`



export default function BannerComponent() {
    return (
      <>
        <Galeria>
          {  ImgSlide.map((e:any) => {      
          const foto = e.img
          return(
            
                  <Foto src={foto} />
      
              
            )
          })}
        </Galeria>
      </>
    )
}
