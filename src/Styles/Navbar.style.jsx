import styled from "styled-components";
import { Link } from 'react-scroll';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    transition: all 300ms;
    position: fixed;
    top: 0;
    z-index: 99;
    font-family: 'Cormorant Garamond', serif;
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    align-items: center;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: 'Cormorant Garamond', serif;
    text-decoration: none;
    margin: 10px;
    transition: all 350ms;
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid white;
    }

    @media (max-width: 915px) {
        display: none;
    }
`;

export const NavbarExteriorLink =styled.a`
    color: white;
    font-size: x-large;
    font-family: 'Cormorant Garamond', serif;
    text-decoration: none;
    margin: 10px;
    transition: all 350ms;
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid white;
    }

    @media (max-width: 915px) {
        display: none;
    }
`

export const NavbarAnchorLink =styled.a`
    color: white;
    font-size: x-large;
    font-family: 'Cormorant Garamond', serif;
    text-decoration: none;
    margin: 10px;
    transition: all 350ms;
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid white;
    }

    @media (max-width: 915px) {
        display: none;
    }
`

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: 40px;
    font-family: 'Cormorant Garamond', serif;
    text-decoration: none;
    margin: 10px;
`;

export const NavbarExteriorLinkExtended = styled.a`
    color: white;
    font-size: 40px;
    font-family: 'Cormorant Garamond', serif;
    text-decoration: none;
    margin: 10px;
`;

export const NavbarAnchorLinkExtended = styled.a`
    color: white;
    font-size: 40px;
    font-family: 'Cormorant Garamond', serif;
    text-decoration: none;
    margin: 10px;
`;

export const Header = styled.h1`
    color: white;
    font-size: 35px;
    margin: 10px;
    max-width: 100px;
    height: auto;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    transition: all 300ms;

    @media (min-width: 915px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 915px) {
        display: none;
    }
`;