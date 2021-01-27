import React, { useEffect } from 'react'
import { Container, Left, Right, Content } from '../../components/Redirect'

export default function Redirect() {

  useEffect(()=>{

    setTimeout(()=>{
      window.location.href = "https://api.whatsapp.com/send?phone=5521964896555"    
    },5000)

  },[])

  return (
    <Container>
      <Content>
        <Left>
          <h1>Orçamento grátis, estaremos te redirecionando para o chat no whatsapp</h1>
          {/* <a href="https://api.whatsapp.com/send?phone=5521964896555">SOLICITE AGORA</a> */}
        </Left>
        <Right>
          <img src="https://lh5.googleusercontent.com/cLaGPFNi7B71ymnLGro7EujqExG4vgwfm3L1IelDnfS5OVmR8XVaA2DGKCuxe9GubSrIgwyxV7djgXS5-_9J0RVpHTzkrmiCVFYgLtvv9K0x_3tCY1A=w1280" alt="Brazmotors"/>
        </Right>
      </Content>
    </Container>
  )
}