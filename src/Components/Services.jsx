import React, { useEffect, useState } from 'react'
import { Exit, ServiceButton, ServiceCard, ServiceContainer, ServiceDescription, ServiceExpanded, ServiceExpandedContainer, ServiceExpandedLeft, ServiceExpandedRight, ServiceImg, ServiceImgExpanded, ServiceInfoExpanded, ServiceTitle, ServiceTitleExpanded } from '../Styles/Services.style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import StudioC from '../assets/Studio C/StudioC1.JPG'
import StudioC2 from '../assets/Studio C/StudioC2.JPG'
import StudioB from '../assets/Studio B/StudioB1.JPG'
import StudioB2 from '../assets/Studio B/StudioB2.JPG'
import StudioA from '../assets/Studio A/StudioA1.JPG'
import StudioA2 from '../assets/Studio A/StudioA2.JPG'




function Services() {

  const [openRehearsal, setOpenRehearsal] = useState(false)
  const [openStudioRecording, setOpenStudioRecording] = useState(false)
  const [openStudioRental, setOpenStudioRental] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.3
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inViewServices = ", inView);
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
    <ServiceContainer
      ref={ref}
    >
      <ServiceCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <ServiceImg src={StudioA} />
        <ServiceTitle>studio recording</ServiceTitle>
        <ServiceDescription>$50/hr</ServiceDescription>
        <ServiceButton
          onClick={() => {
            setOpenStudioRecording((curr) => !curr);
          }}
        >
          more info
        </ServiceButton>
      </ServiceCard>
      {openStudioRecording && (
          <ServiceExpanded as={motion.div}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Exit 
              onClick={() => {
              setOpenStudioRecording((curr) => !curr);
              }} 
            >
              &#10005;
            </Exit>
            <ServiceExpandedContainer>
              <ServiceExpandedLeft>
                <ServiceImgExpanded src={StudioA} />
                <ServiceImgExpanded src={StudioA2} />
              </ServiceExpandedLeft>
              <ServiceExpandedRight>
            <ServiceTitleExpanded>studio recording</ServiceTitleExpanded>
            <ServiceInfoExpanded>
              get your songs professionally <br />
              tracked/mixed/mastered <br />
              by our top of the line engineers <br />
              choose either studio a or studio b <br />
              at only $50/hr
            </ServiceInfoExpanded>
            </ServiceExpandedRight>
            </ServiceExpandedContainer>
          </ServiceExpanded>
        )}
      <ServiceCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <ServiceImg src={StudioC} />
        <ServiceTitle>rehearsal</ServiceTitle>
        <ServiceDescription>$35/hr</ServiceDescription>
        <ServiceButton
          onClick={() => {
            setOpenRehearsal((curr) => !curr);
          }}
        >
          more info
        </ServiceButton>
        
      </ServiceCard>
      {openRehearsal && (
          <ServiceExpanded as={motion.div}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Exit 
              onClick={() => {
              setOpenRehearsal((curr) => !curr);
              }} 
            >
              &#10005;
            </Exit>
            <ServiceExpandedContainer>
              <ServiceExpandedLeft>
                <ServiceImgExpanded src={StudioC} />
                <ServiceImgExpanded src={StudioC2} />
              </ServiceExpandedLeft>
              <ServiceExpandedRight>
            <ServiceTitleExpanded>rehearsal</ServiceTitleExpanded>
            <ServiceInfoExpanded>
              studio c is a 800 sq ft, <br />
              sound treated reahearsal space <br />
              rent by the hour @ $40/hr <br />
              (Contact us if you would like to use studio c for events!)
            </ServiceInfoExpanded>
            </ServiceExpandedRight>
            </ServiceExpandedContainer>
          </ServiceExpanded>
        )}
      <ServiceCard
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        animate={animation}
      >
        <ServiceImg src={StudioB} />
        <ServiceTitle>studio rental</ServiceTitle>
        <ServiceDescription>$35/hr</ServiceDescription>
        <ServiceButton
          onClick={() => {
            setOpenStudioRental((curr) => !curr);
          }}
        >
          more info
        </ServiceButton>
      </ServiceCard>
      {openStudioRental && (
          <ServiceExpanded as={motion.div}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Exit 
              onClick={() => {
              setOpenStudioRental((curr) => !curr);
              }} 
            >
              &#10005;
            </Exit>
            <ServiceExpandedContainer>
              <ServiceExpandedLeft>
                <ServiceImgExpanded src={StudioB} />
                <ServiceImgExpanded src={StudioB2} />
              </ServiceExpandedLeft>
              <ServiceExpandedRight>
            <ServiceTitleExpanded>studio rental</ServiceTitleExpanded>
            <ServiceInfoExpanded>
              studio b is a full studio build <br />
              with an isobooth and an extra large desk <br />
              for whatever suites your needs <br />
              rent studio b to record yourself, friends or <br />
              to listen to your mixes in a treated space <br />
              **computer not provided**
            </ServiceInfoExpanded>
            </ServiceExpandedRight>
            </ServiceExpandedContainer>
          </ServiceExpanded>
        )}
    </ServiceContainer>
  )
}

export default Services
