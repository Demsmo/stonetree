import React from 'react'
import { ServiceButton, ServiceCard, ServiceContainer, ServiceDescription, ServiceImg, ServiceTitle } from '../Styles/Services.style'
import { motion } from 'framer-motion'
import StudioC from '../assets/Studio C/StudioC1.JPG'
import StudioB from '../assets/Studio B/StudioB1.JPG'
import StudioA from '../assets/Studio A/StudioA1.JPG'


function Services() {
  return (
    <ServiceContainer as={motion.div}
    >
        <ServiceCard as={motion.div} whileHover={{ scale: 1.1 }}>
            <ServiceImg src={StudioC} />
            <ServiceTitle>rehearsal</ServiceTitle>
            <ServiceDescription>$35/hr</ServiceDescription>
            <ServiceButton>book now</ServiceButton>
        </ServiceCard>
        <ServiceCard>
            <ServiceImg src={StudioA} />
            <ServiceTitle>studio recording</ServiceTitle>
            <ServiceDescription>$50/hr</ServiceDescription>
            <ServiceButton>book now</ServiceButton>
        </ServiceCard>
        <ServiceCard>
            <ServiceImg src={StudioB} />
            <ServiceTitle>studio rental</ServiceTitle>
            <ServiceDescription>$35/hr</ServiceDescription>
            <ServiceButton>book now</ServiceButton>
        </ServiceCard>
    </ServiceContainer>
  )
}

export default Services
