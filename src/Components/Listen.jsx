import React from 'react'
import { AudioPlayer, ListenAudio, ListenContainer } from '../Styles/Listen.style'
import Sober from '../assets/Audio/Turner/[Hip Hop] sober thoughts p5 (by Cameron Dominique).mp3'

function Listen() {
  return (
    <ListenContainer>
      <AudioPlayer>
      <audio src="src/assets/Audio/Turner/[Hip Hop] sober thoughts p5 (by Cameron Dominique).mp3"></audio>
      <button>back 30</button>
      <button> play/pause</button>
      <button>forward 30</button>

      <div>0:00</div>
      
      <div>
        <input type="range" />
      </div>

      <div>2:49</div>
      </AudioPlayer>
    </ListenContainer>
  )
}

export default Listen
