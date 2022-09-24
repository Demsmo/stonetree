import styled from "styled-components";


export const HomeContainer = styled.div`
    background-color: black;
    font-family: 'Cormorant Garamond', serif;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px;
`



export const Seperator = styled.hr`
    width: 100%;
    margin: 90px;
    color: black;
    border: none;
`

export const SeperatorHome = styled.hr`
    width: 100%;
    margin-bottom: 150px;
    
`

export const ContainerName = styled.h1`
    color: white;
    font-size: 50px;
    margin: 35px;

    @media (max-width: 955px) {
        font-size: 30px;
    }
`



export const Scroll = styled.link`
    
`

export const BookContainer = styled.div`
    z-index: 10;
    position: fixed;
    bottom: 100px;
`

export const BookButton = styled.button`
    border: 2px solid white;
    padding: 10px;
    border-radius: 50px;
    font-size: 30px;
    z-index: 10;
    
    @media (max-width: 955px) {
        font-size: 20px;
    }
`

