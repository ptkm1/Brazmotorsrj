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
          <img style={{ width: "80%" }} src="https://lh4.googleusercontent.com/tYzQqtrk73tSGMx_I3Q38AyqS9DexUzP_OaC7d4gJaWQsK7P8P_OY2ZJvgk8yzi5jTAcE5I-NUJw3xA3Z09j_lhJiJLxfMV8FLn7n9D6wwdDOpnxbcM=w1280" alt="Brazmotors"/>
        </Right>
      </Content>
    </Container>
  )
}