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
`

export const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 3px solid white;
`

export const ServiceImg = styled.img`
    height: 200px;

    @media (max-width: 944px){
        height: 100px;
    }
`

export const ServiceTitle = styled.h1`
    color: white;
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
`