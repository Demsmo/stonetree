import React from 'react'
import { Info } from 'react-feather'
import { A, BannerContainer, Concept, Logo, LogoContainer, Slogan, SocialContainer, SocialHolder, Video, VideoContainer } from '../Styles/Banner.style'
import { Facebook, Instagram } from 'react-feather'
import LogoImg from '../assets/logo.png';
import ConceptImg from '../assets/concept.png'
import VideoMov from '../assets/Video/video.mov'

function Banner() {
  return (
    <BannerContainer>
        <VideoContainer>
            <Video src={VideoMov} autoPlay loop muted />
        </VideoContainer >
        <LogoContainer>
            <Logo src={LogoImg}/>
            <Slogan>growing a solid foundation for creative freedom</Slogan>
            <Info>music & sound production studio based in fountain square, indianapolis</Info>
            <SocialContainer>
                <SocialHolder>
                    <a href='https://www.facebook.com/stonetree.us' target='_blank' rel='noreferrer' ><Facebook color='white' size={48}/></a>
                </SocialHolder>
                <SocialHolder>
                    <A href='https://www.instagram.com/stonetree.us/' target='_blank' rel='noreferrer' ><Instagram color='white' size={48}/></A>
                </SocialHolder>
            </SocialContainer>
            <A href='https://the-concept.herokuapp.com/' target='_blank`' rel='noreferrer' ><Concept src={ConceptImg} /></A>
        </LogoContainer>
    </BannerContainer>
  )
}

export default Banner
