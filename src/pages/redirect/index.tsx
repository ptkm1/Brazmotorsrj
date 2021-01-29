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
          <h1>Orçamento grátis. Estaremos te redirecionando para o whatsapp...</h1>
          {/* <a href="https://api.whatsapp.com/send?phone=5521964896555">SOLICITE AGORA</a> */}
        </Left>
        <Right>
          <img style={{ width: "80%" }} src="https://i.imgur.com/i3YFg7W.png" alt="Brazmotors"/>
        </Right>
      </Content>
    </Container>
  )
}