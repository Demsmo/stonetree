import React, { useEffect } from 'react'
import { ContactContainer, InfoContainer, MapContainer, Name, Address, ContactInfo, Map, OuterContactContainer, } from '../Styles/Contact.style'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Contact() {

  const { ref, inView } = useInView({
    threshold: 0.3
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inViewContact = ", inView);
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
    <OuterContactContainer ref={ref}>
      <ContactContainer as={motion.div}
      animate={animation}
      >
        <MapContainer>
          <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6134.764652583164!2d-86.14007825767173!3d39.75352354145232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f222894499a9e43!2sstonetree.!5e0!3m2!1sen!2sus!4v1663784561101!5m2!1sen!2sus" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
        </MapContainer>
        <InfoContainer>
          <Name>stonetree.</Name>
          <Address>1026 Shelby St <br /> Indianapolis, Indiana 46203</Address>
          <ContactInfo>(317) 440-4372 <br /> stonetreestudios.us@gmail.com</ContactInfo>
        </InfoContainer>
      </ContactContainer>
    </OuterContactContainer>
  )
}

export default Contact
