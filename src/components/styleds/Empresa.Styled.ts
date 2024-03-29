import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f6f7fb;
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 450px){
        padding-top: 170px;
    }

    
`
export const Conteudo = styled.div`
    width: 691px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: black;
        font-size: 30px;
    }
    h3{
        color: gray;
        font-size: 17px;
    }
    p{
        font-size: 20px;
        color: black;
        margin-top: 15px;
        text-align: justify;
    }
`