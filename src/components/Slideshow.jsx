import Reac, {useRef} from 'react'
import styled from 'styled-components'

//Imagens
import img1 from '../assets/slide.png'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpeg'

const NewslideContainer = styled.div`
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
  }

  /* Hide the images by default */
  .mySlides {
    display: none;
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }

  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
`;

export default function Slideshow() {

    const ref = useRef()
    const ref2 = useRef()

    var slideIndex = 1
    showSlides(slideIndex)

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = ref
      var dots = ref2
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }



  return (
    <NewslideContainer>
        <div className="slideshow-container">

<div className="mySlides fade" ref={e=>ref = e} >
  <div className="numbertext">1 / 3</div>
  <img src={img1} style={{width:"100%"}} />
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade" ref={e=>ref = e} >
  <div className="numbertext">2 / 3</div>
  <img src={img2} style={{width:"100%"}} />
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade" ref={e=>ref = e} >
  <div className="numbertext">3 / 3</div>
  <img src={img3} style={{width:"100%"}} />
  <div className="text">Caption Three</div>
</div>

<a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
<a className="next" onClick={()=>plusSlides(1)}>&#10095;</a>
</div>
<br/>

<div style={{textAlign:"center"}}>
<span className="dot" ref={e=>ref2 = e} onClick={()=>currentSlide(1)}></span>
<span className="dot" ref={e=>ref2 = e} onClick={()=>currentSlide(2)}></span>
<span className="dot" ref={e=>ref2 = e} onClick={()=>currentSlide(3)}></span>
</div>
    </NewslideContainer>
  )
}
