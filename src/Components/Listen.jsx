// import React, { useState, useRef } from 'react'
// import { AudioPlayer, CurrentTime, Duration, ForwardBackward, ListenContainer, Play, PlayPause, ProgressBar } from '../Styles/Listen.style'
// import { BsArrowLeftShort } from 'react-icons/bs'
// import { BsArrowRightShort } from 'react-icons/bs'
// import { FaPlay } from 'react-icons/fa'
// import { FaPause } from 'react-icons/fa'
 

// function Listen() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(0)

//   const audioPlayer = useRef();

//   const togglePlayPause = () => {
//     const prevValue = isPlaying;
//     setIsPlaying(!prevValue);
//     if (!prevValue) {
//       audioPlayer.current.play();
//     } else {
//       audioPlayer.current.pause();
//     }
//   }

//   return (
//     <ListenContainer>
//       <AudioPlayer>
//       <audio ref={audioPlayer} src="src/assets/Audio/Turner/[Hip Hop] sober thoughts p5 (by Cameron Dominique).mp3"></audio>
//       <ForwardBackward><BsArrowLeftShort />30</ForwardBackward>
//       <PlayPause onClick={togglePlayPause}> 
//         {isPlaying ? <FaPause /> : <Play><FaPlay /></Play>}
//       </PlayPause>
//       <ForwardBackward>30<BsArrowRightShort/></ForwardBackward>

//       <CurrentTime>0:00</CurrentTime>
      
//       <div>
//         <ProgressBar type="range" />
//       </div>

//       <Duration>{duration}</Duration>
//       </AudioPlayer>
//     </ListenContainer>
//   )
// }

// export default Listen
