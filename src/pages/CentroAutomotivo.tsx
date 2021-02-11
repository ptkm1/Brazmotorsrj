import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import MenuComponent from "../components/MenuComponent";
import WhatsApp from "../components/WhatsApp";
import { Container, Cards, Card, VectorLocal } from '../components/styleds/CentroAutomotivo.Styled';
import Image from 'next/image';



function CentroAutomotivo() {
  return (
    <>
    <Head>
      <title>Centro Automotivo</title>
    </Head>
      <MenuComponent />
      <Container>

      <h2 style={{color:"black"}} >Acessórios automotivos:</h2>
            <hr style={{width:"100px",
             marginTop:"5px",
             border:"2px solid #e63946",
             color:"#e63946",
             marginBottom:"20px"}}></hr>

        <Cards>
        <Link href="/Acessorios">
          <Card>
            <VectorLocal>
            <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/off_road_9oae.svg" width="150px" alt="Carro"/>
            </VectorLocal>
            <h3 style={{color:"black"}}>Acessórios Automotivos</h3>
          </Card>
          </Link>

        <Link href="/Especializada">
          <Card>
            <VectorLocal>
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/fast_car_p4cu.svg" width="150px" alt="Carro"/>
            </VectorLocal>
            <h3 style={{color:"black"}}>Mecânica Especializada</h3>
          </Card>
        </Link>

        <Link href="/Preventiva">
          <Card>
            <VectorLocal>

            <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/electric_car_b7hl.svg" width="150px" alt="Carro"/>
            </VectorLocal>
            <h3 style={{color:"black"}}>Mecânica Preventiva</h3>
          </Card>
        </Link>


        <Link href="/Estetica">
          <Card>
            <VectorLocal>
            <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/city_driver_jh2h.svg" width="150px" alt="Carro"/>
            </VectorLocal>
            <h3 style={{color:"black"}}>Estética Automotiva</h3>
          </Card>
        </Link>
        </Cards>
      </Container>

    </>
  )
}

export default CentroAutomotivo;