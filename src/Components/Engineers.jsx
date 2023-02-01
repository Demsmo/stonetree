import React, { useEffect } from 'react'
import { EngineerButton, EngineerCard, EngineerContainer, EngineerDescription, EngineerExtendedContainer, EngineerExtendedDescription, EngineerExtendedImg, EngineerExtendedInnerContainer, EngineerExtendedLeft, EngineerExtendedRight, EngineerExtendedTitle, EngineerImg, EngineerTitle, Exit, SpotifyButton } from '../Styles/Engineers.style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Ques from '../assets/Engineers/ques.jpg'
import Casper from '../assets/Engineers/Casper.jpg'
import Bayem from '../assets/Engineers/Bayem.jpeg'
import Leo from '../assets/Engineers/Leo.jpeg'
import Eddy from '../assets/Engineers/Eddy.jpeg'
import Don from '../assets/Engineers/Don.jpeg'
import { useState } from 'react'

function Engineers() {

  const [openQues, setOpenQues] = useState(false)
  const [openCasper, setOpenCasper] = useState(false)
  const [openBayem, setOpenBayem] = useState(false)
  const [openLeo, setOpenLeo] = useState(false)
  const [openEddy, setOpenEddy] = useState(false)
  const [openDon, setOpenDon] = useState(false)

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
              <a href='https://open.spotify.com/artist/6KJFzBeIB6WKEmK7uH7zXS?si=iG2I_VuOSPyNeLJeJn2R6g' target="_blank" rel="noreferrer" ><SpotifyButton>listen on spotify</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      

      {/* BAYEM ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Bayem} />
        <EngineerTitle>Bayem</EngineerTitle>
        <EngineerDescription>Pop, Acoustic, Rap</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenBayem((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openBayem && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenBayem((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Bayem} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Bayem</EngineerExtendedTitle>
              <EngineerExtendedDescription>
              Bayem is an Artist, Producer, and Engineer from Indianapolis. <br />
              He has had his music featured in multiple forms of media, <br /> 
              most notably "The Kardashians" reality show. <br /> 
              Specializing in Pop, Bayem is excited to help artists <br /> 
              realize the vision they have for their artistry.
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/artist/0Y09Z27exTJm2bAchmRoum?si=4gQNHPR-QqidKjxmsZ2qWg' target="_blank" rel="noreferrer" ><SpotifyButton>listen on spotify</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

       {/* LEO ENGINEER CARD */}
       <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Leo} />
        <EngineerTitle>Leo (Jack)</EngineerTitle>
        <EngineerDescription>Rap, Hip-Hop, R&B</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenLeo((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openLeo && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenLeo((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Leo} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Leo (Jack)</EngineerExtendedTitle>
              <EngineerExtendedDescription>
              Leo (Jack) is an aspiring singer/
              songwriter, recording engineer & <br/>
              beat producer with a unique ear
              for compression (both hardware <br/>
              and software plugins) & 
              knowledge of how to mix and <br/>
              master an overall project. He has
              worked in genres such as R&B, <br/>
              Hip-Hop, Rap & Pop as well as
              working in different categories like <br/>
              voiceovers for commercials and 
              video games. From his learning <br/>
              experience graduating from 
              Azmyth Studios, to his music <br/>
              composition/theory background,
              he definitely brings a lot of ideas <br/>
              and talent to the table. He works
              diligently to ensure the song <br/>
              sounds professional, while
              building a strong collaboration <br/>
              with the client.
              </EngineerExtendedDescription>
              <a href='https://music.youtube.com/playlist?list=PLTKpQQnrq09IOS9p8HrrAJSuY-9xuza77&feature=share' target="_blank" rel="noreferrer" ><SpotifyButton>listen on youtube</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      {/* EDDY ENGINEER CARD */}
       <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Eddy} />
        <EngineerTitle>Eddy Blake</EngineerTitle>
        <EngineerDescription>Pop, R&B, Hip-Hop</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenEddy((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openEddy && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenEddy((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Eddy} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Eddy Blake</EngineerExtendedTitle>
              <EngineerExtendedDescription>
              Eddy Blake is a songwriter and engineer from Indianapolis. <br/>
              Starting his career as a rapper and transitioning into a Pop and R&B songwriter <br/>
               has given him a unique perspective on making music that he applies to his engineering too. <br/>
               He has worked with independent labels and pitched songs to artists on major labels as well, <br/>
               and he applies the same high standards to himself and his collaborators <br/>
               no matter whose music he works on to create the best product possible.
              </EngineerExtendedDescription>
              <a href='https://soundcloud.com/eddyblakemusic/sets/songs-i-mixed-and-mastered/s-Ez0iSq58EVh?si=1f66f9c4996c469a8f1817840713694d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target="_blank" rel="noreferrer" ><SpotifyButton>listen on soundcloud</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      {/* DON ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <EngineerImg src={Don} />
        <EngineerTitle>DonJuan</EngineerTitle>
        <EngineerDescription>Rap, Hip-Hop</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenDon((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openDon && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenDon((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Don} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>DonJuan</EngineerExtendedTitle>
              <EngineerExtendedDescription>
              DonJuan is a Creative Collaborative self taught audio engineer. <br/>
              Highly experienced with rap and hip-hop in studio recording. <br/>
               DonJuan has Digital sound editing skills and trouble shooting <br/>
               skills along with excellent hearing. He is always open to learning new <br/>
               things and strives for perfection. He is also an artist, songwriter and producer. <br/>
               DonJuan has a strong love and passion for music, and it shows in his work. <br/>
               He has good communication with other artist. <br/>
               DonJuan has also done commercials and voice over editing for various actors.
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/playlist/2atVrVLKfefzxZSvkzD7Cg?si=wxvR4zFUSSG0_clS7jFm7g' target="_blank" rel="noreferrer" ><SpotifyButton>listen on spotify</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

    </EngineerContainer>
    
  )
}

export default Engineers
