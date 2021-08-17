import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'

import {   Footer, ItemsBot, ItemsTop } from './styleds/Footer.Styled'

import Logo from '../assets/logo.webp'

export default function FooterComponent() { 
  return (
    <Footer>
      <ItemsTop>
        <img src={Logo} alt="Logo" />

        <div style={{display: "flex", alignItems: "center"}}>
          <a href="https://www.instagram.com/brazmotorsrj" target="_blank"  > <span><AiOutlineInstagram /></span></a>
          <a href="https://www.facebook.com/brazmotorsrj" target="_blank"  > <span> <FaFacebookF /> </span></a>
          <a href="https://www.facebook.com/brazmotorsrj" target="_blank"  > <span> <AiFillYoutube /> </span></a>
        </div>

        <p> Av. Pref. Dulcídio Cardoso, 2900 - Barra da Tijuca, Rio de Janeiro - RJ, 22631-052, Brasil</p>
        <p>brazmotorsrj@gmail.com</p>
        <p>(21) 96489-6555 | (21) 2439-8048</p>
      </ItemsTop>
      <ItemsBot>
        <p>© 2021 por BrazmotorsRj. - <a style={{ color: 'green' , textDecoration: 'bold'}} href="https://codecomunity.tech" > Desenvolvido por CodeComunity </a></p>
      </ItemsBot>
    </Footer>
  )
}
