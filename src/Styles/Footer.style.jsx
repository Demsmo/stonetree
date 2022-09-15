import styled from "styled-components";


export const FooterContainer = styled.div`
    width: 100%;
    background-color: black;
    height: 80px;
    display: flex;
    flex-direction: column;
    transition: all 300ms;
    position: fixed;
    bottom: 0;
    z-index: 2;
    text-align: center;
    align-items: center;

`;

export const Logo = styled.img`
    margin: 0px;
    max-width: 200px;
    height: auto;
    position: relative;
    bottom: 35px;
`;