import styled from "styled-components";

export const NavBar = styled.div`
  background-color: black;
  width: 100%;
  height: max-content;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px 90px;
  z-index: 15;

  #Logo {
    width: 150px;
  }
  @media (max-width: 700px){
    padding: 10px 30px;

    input{
      display: none;
    }
  }
`;

export const ShowroomDrop = styled.div`
  width: 110px;
  height: 180px;
  background-color: black;
  position: absolute;
  right: 390px;
  padding-top: 30px;
 

  display: flex;
  flex-direction: column;
  align-items: center;


`
export const ShowroomHover = styled.div`
  font-size: 17px;
  font-weight: bold;
`


export const OptionsNavbar = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin-left: 20px;
    font-size: 17px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }
  a:hover {
    color: #e63946;
  }
  @media(max-width: 500px){
    display: none;
  } 
  
`;


