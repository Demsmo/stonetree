import React, { useEffect } from 'react'
import { EngineerButton, EngineerCard, EngineerContainer, EngineerDescription, EngineerExtendedContainer, EngineerExtendedDescription, EngineerExtendedImg, EngineerExtendedInnerContainer, EngineerExtendedLeft, EngineerExtendedRight, EngineerExtendedTitle, EngineerImg, EngineerTitle, Exit } from '../Styles/Engineers.style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Ques from '../assets/Engineers/ques.jpg'
import Turner from '../assets/Engineers/Turner.png'
import Casper from '../assets/Engineers/Casper.jpg'
import Young from '../assets/Engineers/Young.jpg'
import { useState } from 'react'

function Engineers() {

  const [openQues, setOpenQues] = useState(false)
  const [openTurner, setOpenTurner] = useState(false)
  const [openCasper, setOpenCasper] = useState(false)
  const [openYoung, setOpenYoung] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.3
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: 'tween', duration: 1.5
        }
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 })
    }
  }, [inView]);

  return (
    <EngineerContainer
      ref={ref}
    >
      {/* QUES ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Ques} />
        <EngineerTitle>Ques</EngineerTitle>
        <EngineerDescription>Hip-Hop, Rap, R&B</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenQues((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openQues && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenQues((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Ques} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Ques</EngineerExtendedTitle>
              <EngineerExtendedDescription>
                enter bio here
              </EngineerExtendedDescription>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      {/* TURNER ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Turner} />
        <EngineerTitle>Turner</EngineerTitle>
        <EngineerDescription>R&B and Pop</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenTurner((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openTurner && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenTurner((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Turner} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Turner</EngineerExtendedTitle>
              <EngineerExtendedDescription>
                Turner Dunlop is an engineer, producer, and songwriter <br />
                specializing in multiple genres from hip hop and R&B to pop and neo-soul. <br />
                Turner produces, engineers, and advises on artist development for <br />
                multiple record labels including Spinach Records (based in New York), <br />
                Absorb (Indianapolis), and Whiskey Pixel Entertainment (Indianapolis). <br />
                His work has been placed on numerous Spotify editorial playlists and <br />
                has been featured on the TV Show Keeping Up With The Kardashians. <br />
                As an engineer, Turner is known for bringing fresh ideas to the table <br />
                that elevate the final product beyond client expectations. <br />
                In all aspects of his work, it is Turner’s passion, creativity, <br />
                and ear for industry standard quality that set him apart.
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/artist/1rTHxqQScSwNicdYSOWafz' target="_blank" rel="noreferrer" ><EngineerButton>listen on spotify</EngineerButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      {/* CASPER ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Casper} />
        <EngineerTitle>Casper</EngineerTitle>
        <EngineerDescription>Hip-Hop, Rap</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenCasper((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openCasper && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenCasper((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Casper} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Casper</EngineerExtendedTitle>
              <EngineerExtendedDescription>
                The Indianapolis native, Alec “Casper Merci” Surridge, is a producer, songwriter, and <br />
                engineer. Adopting a do-it-yourself approach to his music, if there is something he hasn’t done <br />
                before, he’ll learn it. <br />
                Casper’s career in music began in early high school when he bought his first laptop and <br />
                began making beats in Logic Pro. His passion and drive have always been solidly rooted in a <br />
                deep love of hip-hop and rap and it shows in his music. In 2022, Casper graduated from the <br />
                Music Technology program at IUPUI where he developed his skills as an artist, producer, and <br />
                engineer. It has been his goal from the beginning to be completely self-sufficient in his creative <br />
                process from beat-making to cutting verses in the booth to mastering the final mix of a song. <br />
                His switch to producing in Ableton, engineering in ProTools, learning bass and guitar, and <br />
                relying on his turn-table and ever growing collection of vinyl allows him to continue to grow in a <br />
                unique and original way as an artist and musician.
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/artist/6KJFzBeIB6WKEmK7uH7zXS?si=iG2I_VuOSPyNeLJeJn2R6g' target="_blank" rel="noreferrer" ><EngineerButton>listen on spotify</EngineerButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      {/* YOUNG ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Young} />
        <EngineerTitle>Young</EngineerTitle>
        <EngineerDescription>Hip-Hop, Rap</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenYoung((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openYoung && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenYoung((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Young} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Young</EngineerExtendedTitle>
              <EngineerExtendedDescription>
                My name is Young I have been engineering music for two years. <br />
                I record with protools I am proficient with autotune. <br />
                I have recorded all genres of music. <br />
                I my self am an artist and understand the importance of sounding your best. <br />
                If you have any other questions just hit me up! Look forward to working with you!
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/artist/1cJFQQBpqiVwgwyltMYKJx' target="_blank" rel="noreferrer" ><EngineerButton>listen on spotify</EngineerButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}
    </EngineerContainer>
  )
}

export default Engineers
