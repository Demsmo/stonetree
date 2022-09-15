import React from 'react'
import { EngineerButton, EngineerCard, EngineerContainer, EngineerDescription, EngineerImg, EngineerTitle } from '../Styles/Engineers.style'
import Ques from '../assets/Engineers/ques.jpg'
import Turner from '../assets/Engineers/Turner.png'

function Engineers() {
    return (
        <EngineerContainer>
            <EngineerCard>
                <EngineerImg src={Ques} />
                <EngineerTitle>Ques</EngineerTitle>
                <EngineerDescription>Specializes in Hip-Hop, Rap, R&B,</EngineerDescription>
                <EngineerButton >book now</EngineerButton>
            </EngineerCard>
            <EngineerCard>
                <EngineerImg src={Turner} />
                <EngineerTitle>Turner</EngineerTitle>
                <EngineerDescription>Specializes in R&B and Pop</EngineerDescription>
                <EngineerButton >book now</EngineerButton>
            </EngineerCard>
        </EngineerContainer>
    )
}

export default Engineers
