import React from 'react'
import { Info, Logo, CardContainer, Slogan, SocialContainer, SocialHolder, InnerContainer } from '../Styles/AboutCard.style'
import { Facebook, Instagram } from 'react-feather'

import { motion } from 'framer-motion'
import LogoImg from '../assets/logo.png';

function AboutCard() {
    

  return (
    <CardContainer>
        <InnerContainer as={motion.div} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Logo  src={LogoImg}  />
            <Slogan >growing a solid foundation for creative freedom</Slogan>
            <Info >music & sound production studio based in fountain square, indianapolis</Info>
            <SocialContainer >
                <SocialHolder>
                    <a href='https://www.facebook.com/stonetree.us' target='_blank' rel='noreferrer' ><Facebook color='white' size={48}/></a>
                </SocialHolder>
                <SocialHolder>
                    <a href='https://www.instagram.com/stonetree.us/' target='_blank' rel='noreferrer' ><Instagram color='white' size={48}/></a>
                </SocialHolder>
            </SocialContainer>
            {/* <A href='https://the-concept.herokuapp.com/' target='_blank`' rel='noreferrer' ><Concept src={ConceptImg} /></A> */}
        </InnerContainer>
    </CardContainer>
  )
}

export default AboutCard
