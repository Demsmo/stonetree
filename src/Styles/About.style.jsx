import styled from "styled-components";

export const AboutContainer = styled.div`
    align-items: center;
    height: 1px;
    position: relative;
    top: -650px;
`

export const AboutInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const AboutH1 = styled.h1`
    font-size: 45px;
    color: white;
    position: fixed;
    top: 450px;

    @media (max-width: 955px) {
        font-size: 20px;
    }
`