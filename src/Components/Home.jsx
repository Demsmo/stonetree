import React from 'react'
import { BookButton, BookContainer, ContainerName, HomeContainer, Seperator, SeperatorHome } from '../Styles/Home.style'
import Services from './Services';
import Banner from './Banner';
import Engineers from './Engineers';
// import Listen from './Listen';
import Contact from './Contact';
import AboutCard from './AboutCard';
import About from './About';



function Home() {

    
  return (
    
    <HomeContainer >
        <SeperatorHome id='home'/>
            <AboutCard />
            <Banner />
            <About />
            <BookContainer><a href='https://stonetreebooking.square.site' target='_blank' rel="noreferrer" ><BookButton>book now</BookButton></a></BookContainer>
        <Seperator id='services'/>
        <ContainerName >services</ContainerName>
            <Services />
        <Seperator id='engineers'/>
        <ContainerName>engineers</ContainerName>
            <Engineers />
        {/* <Seperator id='listen'/>   
        <ContainerName>listen</ContainerName>
            <Listen /> */}
        <Seperator id='contact'/>
        <ContainerName>contact</ContainerName>
            <Contact />
        {/* <Seperator id='book' />
        <ContainerName>book</ContainerName>
            <Booking /> */}
    </HomeContainer>
  )
}

export default Home
