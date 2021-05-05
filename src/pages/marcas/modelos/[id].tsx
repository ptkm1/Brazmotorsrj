import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, CardCarro, TodosOsCarros, CardCarroHover } from '../../../components/styleds/Modelos.Styled'
import MenuComponent from "../../../components/MenuComponent";
import Car from '../../car/[id]'
import { Card, CardImage, CardInfo } from '../../../components/styleds/CardComponents.Styled'

export default function Carros({ carros }) {
  console.log(carros)

  const { isFallback } = useRouter()

  if (isFallback) { return <h1>carregando...</h1> }

  return (
    <>
      <MenuComponent />
    <Container>
         <div>
          <h1 style={{marginTop:"100px", fontSize: '1.9rem', color: '#e63946'}} >Carros</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #e63946", color: '#e63946', marginBottom: "20px" }}></hr>
        </div> 

      <TodosOsCarros>

        {caimport React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, CardCarro, TodosOsCarros, CardCarroHover } from '../../../components/styleds/Modelos.Styled'
import MenuComponent from "../../../components/MenuComponent";
import Car from '../../car/[id]'
import { Card, CardImage, CardInfo } from '../../../components/styleds/CardComponents.Styled'

export default function Carros({ carros }) {
  console.log(carros)

  const { isFallback } = useRouter()

  if (isFallback) { return <h1>carregando...</h1> }

  return (
    <>
      <MenuComponent />
    <Container>
         <div>
          <h1 style={{marginTop:"100px", fontSize: '1.9rem', color: '#e63946'}} >Carros</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #e63946", color: '#e63946', marginBottom: "20px" }}></hr>
        </div> 

      <TodosOsCarros>

        {carros.map((e: any) => {
          return (
            <>
              <Link href="/car/[id]" as={`/car/${e.id}`}>
                <Card key={e.id}>
                    <CardImage uri={e.imagem} />
                    <CardInfo>   
                        <h4>{e.nome}</h4>
                        <h5>{e.marca}</h5>
                        <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>  
                          <h6>Ano: {e.ano}</h6> 
                          <h6>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6> 
                        </div>               
                    </CardInfo>
                  
                  </Card>
              </Link>
            </>
          )
        })}
      </TodosOsCarros>
    </Container>
    </>
  )

}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros`)
  const data = await response.json()

  const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

  return { paths, fallback: true }
}



export const getStaticProps: GetStaticProps = async (context) => {

  const id: any = context.params.id

  const response = await fetch(`https://teste-brazmotors.herokuapp.com/marcas/modelos/${id}`)
  const data = await response.json();

  return { props: { carros: data }, revalidate: 10 }
}