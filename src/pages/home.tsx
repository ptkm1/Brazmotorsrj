import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import {
  Container,
  Header,
  FirstSection,
  SecondSection,
  CentralizeText,
  ItemsFooter,
  CardsContainerHome,
  CardInfoHome,
  IconInfo,

} from "../components/styleds/Layout.Styled";



import Footer from '../components/FooterComponent'
import { NavBar, OptionsNavbar } from "../components/styleds/Navbar.Styled";
import { Card, CardImage, CardInfo, CardSeparaBot, CardSeparaTop,   CardContainerHome, CardsInfoBot } from "../components/styleds/CardComponents.Styled";
import { ContainerWhats } from "../components/styleds/WhatsApp.Styled";
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

import MenuComponent from "../components/MenuComponent";

import Banner from "../assets/1.png";
import BannerSlide from "../components/BannerComponent";
//Icons
import { IoMailSharp, IoLocationSharp, IoCall, IoCarSport } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import { BiDollar } from "react-icons/bi"
import { TiSpanner } from "react-icons/ti"

//Whats
import WhatsApp from "../components/WhatsApp";


export const getStaticProps = async () => {

  const response = await fetch('https://teste-brazmotors.herokuapp.com/carros/')
  const data = await response.json();
  console.log(data)

  return {
    props: {
      carro: data,
    }
  }
}

export default function Home({carro}) {

  return (
    <>
      <Head>
        <title>Brazmotors RJ</title>
      </Head>
      <MenuComponent />
      <Container>
        <Header>
          {/* <img src={Banner} alt="Picture of the author" /> */}
          { /* <BannerSlide /> */ }
          <iframe style={{ border: 'none' }} src="https://teste-brazmotors.herokuapp.com/public/slide.html" height="600px">
          </iframe>
        </Header>


        <WhatsApp />

        <FirstSection>
          <h1 style={{marginTop:"30px", fontSize: '1.9rem'}} >Nossos carros</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #e63946", color: "#e63946", marginBottom: "20px" }}></hr>
        </FirstSection>
        <SecondSection>
            {carro.map(
              (e): JSX.Element => (
                <Link href="/car/[id]" as={`/car/${e._id}`}>
                <Card key={e.id}>
                  <CardImage uri={e.imagem} />
                  <CardInfo>
                      <h4>{e.marca}</h4>
                      <h5 style={{color:"black"}}>{e.nome}</h5>
                      <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <h6>Ano: {e.ano}</h6>
                        <h6 style={{color:"#e63946"}}>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
                      </div>
                  </CardInfo>
                </Card>
                </Link>
              )
            )}
        </SecondSection>

          <h1 style={{marginTop:"250px", fontSize: '1.9rem', color: "black"}} >Compre já!</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #e63946", color: "#e63946" }}></hr>
          <CardContainerHome>
            <CardsInfoBot>
                <span><IoCarSport /></span>
                <h1>Belos carros</h1>
                <p>Nós temos os mais belos carros, que combinam com você, e com um preço que cabe no seu bolso.</p>
            </CardsInfoBot>
            <CardsInfoBot>
                <span> <TiSpanner /> </span>
                <h1>Centro automotivo</h1>
                <p>Nós também temos mecânica preventiva e especializada, com credibilidade e confiança</p>
            </CardsInfoBot>
            <CardsInfoBot>
                <span><BiDollar /></span>
                <h1>Financie online</h1>
                <p>Encontrou algum serviço que precisa? Entre em contato conosco!, você pode fazer tudo isso online, aqui mesmo no nosso site,</p>
            </CardsInfoBot>
          </CardContainerHome>

          <h1 style={{marginTop:"150px", fontSize: '1.9rem', color:"black"}} >Visite-nos</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #e63946", color: "#e63946", marginBottom: "70px" }}></hr>
          <div style={{marginBottom: "180px" , width: '100%', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.52960198539!2d-43.35190028487018!3d-23.004319047142356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbff1c22675f%3A0x1f6ef7a0bc3b8a3a!2sBRAZMOTORSRJ!5e0!3m2!1spt-BR!2sbr!4v1608662047679!5m2!1spt-BR!2sbr" width="90%" height="500px" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        <Footer />
      </Container>
      </>
  );
}