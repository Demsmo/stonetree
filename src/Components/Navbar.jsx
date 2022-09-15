import React, { useState } from 'react'
import { Header, LeftContainer, NavbarLinkExtended, NavbarContainer, NavbarExtendedContainer, NavbarExteriorLink, NavbarExteriorLinkExtended, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, OpenLinksButton, RightContainer } from '../Styles/Navbar.style'
import LogoImg from '../assets/logo.png'


function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false)

    return (
        <NavbarContainer extendNavbar={extendNavbar} >
            <NavbarInnerContainer>
                <LeftContainer>
                    <Header src={LogoImg} >stonetree.</Header>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='home' spy={true} smooth={true} offset={50} duration={500} >home</NavbarLink>
                        <NavbarLink to='book' spy={true} smooth={true} offset={50} duration={500} >book</NavbarLink>
                        <NavbarExteriorLink href='https://www.sndspc.com/spaces/stonetree' target='_blank'>members</NavbarExteriorLink>
                        <NavbarLink to='services' spy={true} smooth={true} offset={50} duration={500} >services</NavbarLink>
                        <NavbarLink to='engineers' spy={true} smooth={true} offset={50} duration={500} >engineers</NavbarLink>
                        <NavbarLink to='listen' spy={true} smooth={true} offset={50} duration={500} >listen</NavbarLink>
                        <NavbarLink to='contact' spy={true} smooth={true} offset={50} duration={500} >contact</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='home' spy={true} smooth={true} offset={50} duration={500} >home</NavbarLinkExtended>
                    <NavbarExteriorLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} href='https://stonetreebooking.square.site' target='_blank' >book</NavbarExteriorLinkExtended>
                    <NavbarExteriorLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} href='https://www.sndspc.com/spaces/stonetree' target='_blank' >members</NavbarExteriorLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='services' spy={true} smooth={true} offset={50} duration={500} >services</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='engineers' spy={true} smooth={true} offset={50} duration={500} >engineers</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='listen' spy={true} smooth={true} offset={50} duration={500} >listen</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='contact' spy={true} smooth={true} offset={50} duration={500} >contact</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar
