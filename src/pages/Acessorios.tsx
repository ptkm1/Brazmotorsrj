import React from "react";
import Head from "next/head";
import Link from "next/link";

import MenuComponent from "../components/MenuComponent";
import {
  CardsContainer,
  Container,
  Card,
  CardTop,
  PrecoHover,
} from "../components/styleds/Preventiva.Styled";
import Footer from "../components/FooterComponent";

import { CardHover } from "../components/styleds/Preventiva.Styled";

//Whats
import WhatsApp from "../components/WhatsApp";
import { CardImageService } from "../components/styleds/CardComponents.Styled";

export const getStaticProps = async () => {
  const response = await fetch(
    "http://teste-brazmotors.herokuapp.com/acessorios"
  );
  const data = await response.json();

  return {
    props: {
      acessorio: data,
    },
    revalidate: 30,
  };
};

export default function Acessorios({ acessorio }) {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <MenuComponent />
      <Container>
        <WhatsApp />

        <h2 style={{ color: "black" }}>Acessórios automotivos:</h2>
        <hr
          style={{
            width: "100px",
            marginTop: "5px",
            border: "2px solid #e63946",
            color: "#e63946",
            marginBottom: "20px",
          }}
        ></hr>
        <CardsContainer>
          {acessorio.map((e) => (
            <Link href={`acessorios/[id]`} as={`acessorios/${e._id}`}>
              <Card key={e.id}>
                <CardHover id="cardHover">
                  <h3>{e.titulo}</h3>
                  <p>{e.descricao}</p>
                  <PrecoHover>
                    <h1>
                      {e.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h1>
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
  );
}
