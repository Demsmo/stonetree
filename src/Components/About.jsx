import React, { useEffect } from 'react'
import { AboutContainer, AboutH1, AboutInnerContainer } from '../Styles/About.style'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function About() {

    const {ref, inView} = useInView();
    const animation = useAnimation();
    
      useEffect(() => {
        console.log("use effect hook, inViewAbout = ", inView);
        if(inView){
          animation.start({
            opacity: 1,
            transition: {
              type: 'tween', duration: .5
            }
          });
        }
        if(!inView){
          animation.start({opacity: 0})
        }
      }, [inView]);

  return (
    <AboutContainer ref={ref}>
        <AboutInnerContainer as={motion.div} animate={animation} >
            <AboutH1>"growing the seeds of the local scene"</AboutH1>
        </AboutInnerContainer>
    </AboutContainer>
  )
}

export default About
