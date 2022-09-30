import React, { useEffect} from 'react'
import { BannerContainer, Video, VideoContainer } from '../Styles/Banner.style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import VideoMov from '../assets/Video/video.mov'

function Banner() {

    const {ref, inView} = useInView();
    const animation = useAnimation();
    
      useEffect(() => {
        console.log("use effect hook, inViewBanner = ", inView);
        if(inView){
          animation.start({
            opacity: 1,
            transition: {
              type: 'tween', duration: 3
            }
          });
        }
        if(!inView){
          animation.start({opacity: 0})
        }
      }, [inView]);


  return (
    <BannerContainer >
        <VideoContainer ref={ref} >
            <Video as={motion.video} animate={animation} src={VideoMov} autoPlay loop muted playsInline />
        </VideoContainer >
        
    </BannerContainer>
  )
}

export default Banner
