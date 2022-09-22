import styled from "styled-components"

export const CardContainer = styled.div`
    margin: 5px;
    padding: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
`

export const Logo = styled.img`
    /* position: fixed; */
    height: 300px;
    z-index: 2;
    top: 140px;
    

    @media (max-width: 944px) {
        height: 180px;
    }
    
`

export const Concept = styled.img`
    height: 200px;
`

export const A = styled.a`
    /* position: fixed; */
    top: 750px;
    z-index: 2;
`

export const Slogan = styled.h1`
    /* position: fixed; */
    top: 500px;
    font-size: 35px;
    color: white;
    padding: 15px;
    z-index: 2;

    @media (max-width: 944px) {
        font-size: 25px;
        text-align: center;
    }
`

export const Info = styled.h2`
    /* position: fixed; */
    top: 600px;
    font-size: 25px;
    color: white;
    padding: 15px;
    z-index: 2;
    text-align: center;

    @media (max-width: 944px) {
        font-size: 20px;
        padding: 0px;
    }
`

export const SocialContainer = styled.div`
    /* position: fixed; */
    top: 675px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin: 15px;
    z-index: 2;
`

export const SocialHolder = styled.div`
    margin: 15px;
`