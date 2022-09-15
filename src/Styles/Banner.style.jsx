import styled from "styled-components";

export const BannerContainer = styled.div`
    
`

export const VideoContainer = styled.div`

`

export const Video = styled.video`
    position: absolute;
    transform: translate(-25%);
    height: 800px;

    @media (max-width: 944px) {
        width: 385px;
        height: 200px;
    }
`

export const LogoContainer = styled.div`
    margin: 15px;
    padding: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Logo = styled.img`
    height: 300px;
    z-index: 2;
    

    @media (max-width: 944px) {
        height: 85px;
    }
    
`

export const Concept = styled.img`
    height: 200px;
    z-index: 3;
`

export const A = styled.a`
    z-index: 2;
`

export const Slogan = styled.h1`
    font-size: 35px;
    color: white;
    padding: 15px;
    z-index: 2;

    @media (max-width: 944px) {
        font-size: 13px;
    }
`

export const Info = styled.h2`
    font-size: 25px;
    color: white;
    padding: 15px;
    z-index: 2;

    @media (max-width: 944px) {
        font-size: 9px;
        padding: 0px;
    }
`

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin: 15px;
`

export const SocialHolder = styled.div`
    margin: 15px;
    z-index: 2;
`