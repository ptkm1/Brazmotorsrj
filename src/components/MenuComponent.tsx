import React from 'react'

import Link from "next/link"
import Image from 'next/image'
import { MecanicaDrop, MecanicaHover, NavBar, OptionsNavbar, ShowroomDrop, ShowroomHover } from './styleds/Navbar.Styled'
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

import LogoNova from "../assets/logo.webp";

import Burger from './BurgerComp';


export default function MenuComponent() {
  return (
    <NavBar>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img id="Logo" src={LogoNova} alt="logo"  />
      </div>
        <OptionsNavbar>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/Empresa">Empresa</Link>
          </li>

          <ShowroomHover>
            <li>
              <Link href="/showroom">Showroom</Link>
            </li>
              <ShowroomDrop>
                <li>
                  <Link href="/modelos">Estoque</Link>
                </li>
                <li>
                  <Link href="/showroom">Catalogo 0km</Link>
                </li>
              </ShowroomDrop>
          </ShowroomHover>

          
          <MecanicaHover>
            <li>
              <Link href="/CentroAutomotivo">Centro automotivo</Link>
            </li>
                <MecanicaDrop>
                  <li>
                    <Link href="/Preventiva">Mecânica preventiva</Link>
                  </li>
                  <li>
                    <Link href="/Especializada">Mecânica especializada</Link>
                  </li>
                  <li>
                    <Link href="/Estetica">Estética automotiva</Link>
                  </li>
                  <li>
                    <Link href="/Acessorios">Acessórios automotivos</Link>
                  </li>
                </MecanicaDrop>
          </MecanicaHover>
          <li>
            <Link href="Financiamento">Financiamento</Link>
          </li>
        </OptionsNavbar>
        <Burger />
      </NavBar>
  )
}
