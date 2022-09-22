import React from 'react'
import Concept from '../assets/concept.png'
import { FooterContainer, Logo } from '../Styles/Footer.style'

function Footer() {
  return (
    <FooterContainer>
      <a href='https://the-concept.herokuapp.com/' target='_blank' rel="noreferrer" ><Logo src={Concept} >
      </Logo></a>
    </FooterContainer>
  )
}

export default Footer
