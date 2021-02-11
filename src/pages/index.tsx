import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Index() {

  const Router = useRouter()

  useEffect(()=> {
    function Redirecionar(){
      let video = document.getElementById('video')
     

      video.addEventListener('ended', () => {
       Router.push('/home')
      })
    }

    Redirecionar()
  },[])

  return (
    <div>
      <Head>
        <title>Brazmotors</title>
      </Head>

      <main>
      <video style={{width: "100%", height: "100vh"}} autoplay="autoplay" src="https://cdn.sitewebmotors.com.br/uploads/videos/raw/5b96bf49f10d6.mp4?c=2nguuyhc?c=0lygca52" id="video" preload="none"></video>
      </main>
    </div>
  )
}
