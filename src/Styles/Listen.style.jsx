import styled from "styled-components";

export const ListenContainer = styled.div`
    color: white;
    z-index: 2;
`

export const AudioPlayer = styled.div`
    display: flex;
    width: 700px;
    align-items: center;
`

export const ForwardBackward = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    color: white;

    :hover {
        color: #f40082;
    }
`

export const PlayPause = styled.button`
    background: white;
    border: none;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Play = styled.div`
    position: relative;
    left: 5px;
    top: 3px;
`

export const Duration = styled.div`
    font-size: 16px;
`

export const CurrentTime = styled.div`
    font-size: 16px;
    margin-left: 25px;
`

export const ProgressBar = styled.input`
    --bar-bg: grey;
    --seek-before-width: 100px;
    --seek-before-color: blue;
    --knobby: darkblue;
    --selectedKnobby: lightblue;

    appearance: none;
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 11px;
    outline: none;
    
`