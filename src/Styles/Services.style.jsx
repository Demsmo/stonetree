import styled from "styled-components";

export const ServiceContainer = styled.div`
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

export const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    padding: 20px;
    /* border: 3px solid white; */
`

export const ServiceImg = styled.img`
    height: 200px;

    @media (max-width: 944px){
        height: 100px;
    }
`

export const ServiceTitle = styled.h1`
    color: white;

    @media (max-width: 955px) {
        font-size: 30px;
    }
`

export const ServiceDescription = styled.h2`
    color: white;
    font-size: 20px;
`

export const ServiceButton = styled.button`
    border: 2px solid white;
    padding: 10px;
    margin: 25px;
    border-radius: 50px;
    font-size: 30px;
    
    @media (max-width: 955px) {
        font-size: 20px;
    }
`

export const ServiceExpanded = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 80px; 
    width: 100%;
    height: 100%;
    background: black;
    text-align: center;
`

export const ServiceExpandedContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

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

export const ServiceImgExpanded = styled.img`
    height: 300px;

    @media (max-width: 955px) {
        display: none;
    }
`

export const ServiceTitleExpanded = styled.h1`
    color: white;
`

export const ServiceInfoExpanded = styled.h1`
    color: white;
    font-size: 35px;
    margin: 15px;

    @media (max-width: 955px) {
        font-size: 20px;
    }
`

export const ServiceExpandedRight = styled.div`
    
`

export const ServiceExpandedLeft = styled.div`
    display: flex;
    flex-direction: column;
`
