import styled from "styled-components";

export const EngineerContainer = styled.div`
    font-size: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin: 20px;
    padding: 20px;
    justify-content: center;
    z-index: 2;
`

export const EngineerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    padding: 20px;
    /* border: 3px solid white; */

`


export const EngineerImg = styled.img`
    height: 300px;

    @media (max-width: 944px){
        height: 100px;
    }
`

export const EngineerTitle = styled.h1`
    color: white;
`

export const EngineerDescription = styled.h2`
    color: white;
    font-size: 20px;
`

export const EngineerButton = styled.button`
    border: 2px solid white;
    padding: 10px;
    margin: 25px;
    border-radius: 50px;
    font-size: 30px;

    @media (max-width: 955px) {
        font-size: 20px;
        width: 108%;
    }
`

export const SpotifyButton = styled.button`
    border: 2px solid white;
    padding: 10px;
    margin: 25px;
    border-radius: 50px;
    font-size: 30px;

    @media (max-width: 955px) {
        font-size: 20px;
        width: 60%;
    }
`

export const EngineerExtendedContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 80px; 
    width: 100%;
    height: 100%;
    background: black;
    text-align: center;
`

export const EngineerExtendedInnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const EngineerExtendedLeft = styled.div`
    @media (max-width: 955px) {
        display: none;
    }
`

export const EngineerExtendedRight = styled.div`
    
`

export const EngineerExtendedImg = styled.img`
    height: 600px;

    @media (max-width: 955px) {
        display: none;
    }
`

export const EngineerExtendedTitle = styled.h1`
    color: white;
    margin: 15px;
`

export const EngineerExtendedDescription = styled.h1`
    color: white;
    font-size: 35px;

    @media (max-width: 955px) {
        font-size: 15px;
    }
`

export const Exit = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    position: relative;
    left: 1805px;
    z-index: 3;

    @media (max-width: 955px) {
        left: 300px;
    }
`