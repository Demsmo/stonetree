import React, { useEffect } from 'react'
import { EngineerButton, EngineerCard, EngineerContainer, EngineerDescription, EngineerExtendedContainer, EngineerExtendedDescription, EngineerExtendedImg, EngineerExtendedInnerContainer, EngineerExtendedLeft, EngineerExtendedRight, EngineerExtendedTitle, EngineerImg, EngineerTitle, Exit, SpotifyButton } from '../Styles/Engineers.style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Ques from '../assets/Engineers/ques.jpg'
import LeeWay from '../assets/Engineers/Eddy.jpeg'
import Don from '../assets/Engineers/Don.jpeg'
import Justin from '../assets/Engineers/Justin.jpeg'
import Scoob from '../assets/Engineers/Scoob.jpg'
import { useState } from 'react'

function Engineers() {

  const [openQues, setOpenQues] = useState(false)
  const [openLeeWay, setOpenLeeWay] = useState(false)
  const [openDon, setOpenDon] = useState(false)
  const [openJustin, setOpenJustin] =useState(false)
  const [openScoob, setOpenScoob] = useState(false)
 
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
        // animate={animation}
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

      {/* LEEWAY ENGINEER CARD */}
       <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        // animate={animation}
      >
        <EngineerImg src={LeeWay} />
        <EngineerTitle>Lee Way</EngineerTitle>
        <EngineerDescription>Pop, R&B, Hip-Hop</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenLeeWay((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openLeeWay && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenLeeWay((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={LeeWay} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Lee Way</EngineerExtendedTitle>
              <EngineerExtendedDescription>
              Lee Way is a songwriter and engineer from Indianapolis. <br/>
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
        // animate={animation}
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

      {/* JUSTIN ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        // animate={animation}
      >
        <EngineerImg src={Justin} />
        <EngineerTitle>Justin Blackwell</EngineerTitle>
        <EngineerDescription>Metal, Pop-Punk, Alternative</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenJustin((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openJustin && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenJustin((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Justin} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Justin Blackwell</EngineerExtendedTitle>
              <EngineerExtendedDescription>
              If I were to tell you the story of my life, <br/>
              it would be mostly about music. <br/>
              It’s everything to me, everything I do is to serve music. <br/>
              It’s the only thing I care about.
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/playlist/3waQbuD0DW2DAkXzFJCsMH?si=EsBUbTLLSL2MMVBvKFCZfQ' target="_blank" rel="noreferrer" ><SpotifyButton>listen on spotify</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}
    
      {/* SCOOB ENGINEER CARD */}
      <EngineerCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        // animate={animation}
      >
        <EngineerImg src={Scoob} />
        <EngineerTitle>Scoob Stacks</EngineerTitle>
        <EngineerDescription>Rap, Hip-Hop, RnB, Pop</EngineerDescription>
        <EngineerButton
          onClick={() => {
            setOpenScoob((curr) => !curr);
          }}
        >more info</EngineerButton>
      </EngineerCard>
      {openScoob && (
        <EngineerExtendedContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Exit
            onClick={() => {
              setOpenScoob((curr) => !curr);
            }}
          >
            &#10005;
          </Exit>
          <EngineerExtendedInnerContainer>
            <EngineerExtendedLeft>
              <EngineerExtendedImg src={Scoob} />
            </EngineerExtendedLeft>
            <EngineerExtendedRight>
              <EngineerExtendedTitle>Scoob Stacks</EngineerExtendedTitle>
              <EngineerExtendedDescription>
                With a lifelong passion for music <br />
                that began at the young age of 3, <br/>
                Scoob Stacks has cultivated an impressive 16-year  <br />
                journey in the music industry producing, <br />
                audio engineering, & dj’ing. Growing up in the church playing drums, <br />
                piano & guitar helps display Scoob’s versatility shines through his <br /> 
                diverse range of production skills, <br />
                specializing in Rap, Hip Hop, R&B, Pop, and even has a small but <br />
                significant experience in rock/metal under his belt. <br />
                His commitment to musical excellence has earned him noteworthy production  <br />
                credits all around the country with <br />
                renowned artists such as Gucci Mane, Blue Bucks Clan, Icewear Vezzo, <br />
                Bino Rideaux, GrindHardE, Big Sad 1900, <br />
                FMB DZ, Cuban Doll, and many  more. Scoob's talent goes beyond just music. <br />
                He's collaborated with esteemed organizations like the Indianapolis Colts, <br /> 
                BET Network, Indy500 Fest, and FOX59, <br />
                solidifying his status as an all around creative force.  <br />
                Follow Scoob Stacks as he continues to capture listeners <br />
                with his innovative production & a boundless ambition for <br />
                creating music that resonates with listeners across the world.
              </EngineerExtendedDescription>
              <a href='https://open.spotify.com/artist/7Leh82sTig3DlAZ4Ppk1GC?si=pmIU2R7YQc6Q9kb5MZznhA' target="_blank" rel="noreferrer" ><SpotifyButton>listen on spotify</SpotifyButton></a>
            </EngineerExtendedRight>
          </EngineerExtendedInnerContainer>
        </EngineerExtendedContainer>
      )}

      

    </EngineerContainer>
    
  )
}

export default Engineers
