import React from 'react'
import Link from 'next/link'

import {  IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { GiPhone } from 'react-icons/gi'

import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'


import {
  Container,
  Header,
  FirstSection,
  SecondSection,
  CentralizeText,

} from "./styleds/Layout.Styled";

import {   Footer, ItemsBot, ItemsFooter, ItemsMid, ItemsTop} from './styleds/Footer.Styled'

export default function FooterComponent() { 
  return (
    <Footer>
      <ItemsTop>
        <ItemsFooter>
          <h3><IoMailSharp  /></h3>
          <a href="#">brazmotorsrj@gmail.com</a>
        </ItemsFooter>
        <ItemsFooter>
          <h3><IoLocationSharp  /></h3>
          <span >
            Av. Pref. Dulcídio Cardoso, 2900 - Barra da Tijuca, Rio de Janeiro
            - RJ, 22631-052, Brasil
          </span>
        </ItemsFooter>
        <ItemsFooter>
        <h3><GiPhone  /></h3>
          <ul>
            <li>(21) 96489-6555</li>
            <li>(21) 2439-8048</li>
          </ul>
        </ItemsFooter>
    </ItemsTop>
    <ItemsMid>
      <div style={{display: "flex", alignItems: "center"}}>
        <a href="https://www.instagram.com/brazmotorsrj" target="_blank"  > <img style={{width: "33px"}} src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
        <a href="https://www.facebook.com/brazmotorsrj" target="_blank"  > <h2 style={{color:"#3b5998"}} > <FaFacebookSquare size="28px"/> </h2></a>
        <a href="https://www.facebook.com/brazmotorsrj" target="_blank"  > <h2 style={{color:"#c4302b"}} > <AiFillYoutube size="30px"/> </h2></a>
      </div>
      <hr style={{ width: "100%", border: "1px solid black"}}></hr>
    </ItemsMid>
    <ItemsBot>
      <p>© 2021 por Brazmotors.</p>
    </ItemsBot>
  </Footer>
  )
}
