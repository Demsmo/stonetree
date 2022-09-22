import styled from "styled-components";

export const BannerContainer = styled.div`
    height: 1000px;
    z-index: 1;
`

export const VideoContainer = styled.div`

`

export const Video = styled.video`
    position: fixed;
    transform: translate(-50%);
    top: 80px;
    width: 100%;
    overflow: hidden;
    

    @media (max-width: 944px) {
        width: 1500px;
        
        
    }
`