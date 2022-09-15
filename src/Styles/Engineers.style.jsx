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
`

export const EngineerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 3px solid white;
`


export const EngineerImg = styled.img`
    height: 200px;

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
`