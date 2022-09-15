import styled from "styled-components";

export const BookingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    padding: 20px;
`

export const BookingFrame = styled.iframe`
    width: 1500px;
    height: 985px;

    @media (max-width: 944px) {
        width: 340px;
    }
`