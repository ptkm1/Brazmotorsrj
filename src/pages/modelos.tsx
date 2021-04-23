import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'

import MenuComponent from '../components/MenuComponent'

import {
  Container,
  FirstSection,
} from "../components/styleds/Layout.Styled";

import Footer from '../components/FooterComponent'

import {
  FilterPart,
  CarsComponents,
  CarModels
} from "../components/styleds/ModelsCar.Styled"

import { Card,CardImage,CardInfo } from '../components/styleds/CardComponents.Styled'
import { InputFilter } from "../components/styleds/Inputs.Styled"



export const getStaticProps = async () => {
  const response = await fetch('http://teste-brazmotors.herokuapp.com/carros')
  const data = await response.json();

  return {
    props: {
      carros: data,
    },
    revalidate: 30,
  }
  
}


export default function Modelos({carros}) {

  const [ Marca , setMarca ] = useState('')
  const [ Ano , setAno ] = useState('')
  const [ Modelo , setModelo ] = useState('')
  const [ Cores , setCores ] = useState('')

  let type = 'asc'


  // Metodos de filtragem
  function GetUnico(arr, comp) {
    const unico = 
    arr.map( e => e[comp])
    .map((e, i, final)=> final.indexOf(e) === i && i)
    .filter(e=> arr[e])
    .map( e => arr[e])
    return unico
  }

  useEffect(()=>{},[Marca,Ano,Modelo,Cores])


  const unicaCor = GetUnico(carros,"cor")
  const unicaMarca = GetUnico(carros,"marca")
  const unicoModelo = GetUnico(carros,"modelo")
  const unicoAno = GetUnico(carros,"ano")

  let Modelos1 = unicoModelo.map(unico => {
    return unico.modelo
  })

  let Marcas1 = unicaMarca.map(unico => {
    return unico.marca
  })

  let Ano1 = unicoAno.map(unico => {
    return unico.ano
  })

  let Cor1 = unicoAno.map(unico => {
    return unico.cor
  })

  const ModelosSorted = Modelos1.sort()
  const MarcasSorted = Marcas1.sort()
  const AnoSorted = Ano1.sort()
  const CorSorted = Cor1.sort()



  const CarrosFiltrados = carros
  .filter( e => e.ano.toLowerCase().includes(Ano.toLowerCase()) )
    .filter( e => e.cor.toLowerCase().includes(Cores.toLowerCase()) )
      .filter( e=> e.marca.toLowerCase().includes(Marca.toLowerCase()) )
        .filter( e=> e.modelo.toLowerCase().includes(Modelo.toLowerCase()) )
          .map( e => {
            return e ? e : carros
          })

  return (
    <>
      <Head>
        <title>Modelos</title>
      </Head>
      <MenuComponent />
      <Container>
        <FirstSection>
          <h2 style={{color:"black"}}>Veiculos feitos para você, em preço acessivel</h2>
        </FirstSection>
        <CarModels>
          <FilterPart>
            <h2 style={{color:"black"}}>Filtra</h2>


              <InputFilter onChange={ (e) => setMarca(e.target.value) }>
              <option value="0">Selecione a Marca</option>
              { MarcasSorted.map( e => (
                <option key={e} value={e}>{e}</option>
              ) ) }
                
              </InputFilter>


              <InputFilter onChange={ (e) => setAno(e.target.value) }>
                <option value="0">Selecione a Ano</option>
                { AnoSorted.map( e => (
                <option key={e} value={e}>{e}</option>
              ) ) }
              </InputFilter>

              <InputFilter onChange={ (e) => setModelo(e.target.value) }>
                <option value="0">Selecione o modelo</option>
                { ModelosSorted.map( e => (
                <option key={e} value={e}>{e}</option>
              ) ) }
              </InputFilter>

              <InputFilter onChange={ (e) => setCores(e.target.value) }>
                <option value="0">Selecione a Cores</option>
                { CorSorted.map( e => (
                <option key={e} value={e}>{e}</option>
              ) ) }
              </InputFilter>
          </FilterPart>
          <CarsComponents>
          { CarrosFiltrados.map( e => {
              return(
                 <Link href="car/[id]" as={`car/${e._id}`} key={e._id}>
                  <Card>
                    <CardImage uri={e.imagem} />
                    <CardInfo>
                      <h4>{e.nome}</h4>
                      <h5>
                        {e.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h5>
                    </CardInfo>
                  </Card>
                </Link>
              )
            }
            ) }
          </CarsComponents>
        </CarModels>

        <Footer />
      </Container>
    </>
  );
}
