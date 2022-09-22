import styled from "styled-components";

export const OuterContactContainer = styled.div`
    
`

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 900px;
`

export const MapContainer = styled.div`
    margin: 25px;
`

export const Map = styled.iframe`
    width: 600px;
    height: 450px;
    
    @media (max-width: 955px) {
        width: 300px;
        height: 150;
    }
`

export const InfoContainer = styled.div`
    align-items: center;
    color: white;
`

export const Name = styled.h1`
    color: white;
    margin: 25px;
`

export const Address = styled.h2`
    color: white;
    margin: 10px;
`

export const ContactInfo = styled.h2`
    color: white;
    margin: 10px;
`