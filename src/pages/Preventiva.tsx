import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import MenuComponent from "../components/MenuComponent";
import { CardsContainer, Container, Card, CardTop, ContainerForms, CardHover, PrecoHover } from '../components/styleds/Preventiva.Styled';
import { InputsBox, Input } from '../components/styleds/Inputs.Styled';
import { ButtonBlackBorder } from '../components/styleds/Buttons.Styled';

import Teste from '../assets/testePreven.png';



//Whats
import WhatsApp from "../components/WhatsApp";

import Modal from '../components/Modal.Component';
import Footer from '../components/FooterComponent'
import { CardImageService } from '../components/styleds/CardComponents.Styled';



export const getStaticProps = async () => {
    const response = await fetch('https://teste-brazmotors.herokuapp.com/mecanica-preventiva')
    const data = await response.json();
  
    return {
      props: {
        servico: data,
      },
        revalidate: 30,
    }
    
  }


export default function Preventiva({servico}) {

  return (
    <>
        <Head>
            <title>HomePage</title>
        </Head>
        <MenuComponent />
       
        <Container>
        <WhatsApp />
            <h2 style={{color:"black"}}>Mecanica preventiva:</h2>
            <hr style={{width:"100px", marginTop:"5px", border:"2px solid #e63946", color:"#e63946", marginBottom:"20px"}}></hr>
            <CardsContainer>
                {servico.map((e) => (
                  <Link href={`/mecprev/[id]`} as={`/mecprev/${e._id}`}>
                        <Card key={e._id}>
                            <CardHover id="cardHover">
                                <h3>{e.titulo}</h3>
                                <p>{e.descricao}</p>
                                  <PrecoHover>
                                    <h1>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                                  </PrecoHover>       
                            </CardHover>
                            <CardTop>
                            <CardImageService uri={e.imagem} />
                            </CardTop>

                            <h1>{e.titulo}</h1>
                        </Card>
                  </Link>
                ))}
            </CardsContainer>
        </Container>
        <Footer />
        
    </>
  )
}
