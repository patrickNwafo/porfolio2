import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="I'm a passionate and motivated Junior Software Engineer with two years of experience crafting engaging and user-centric web applications. Driven by a thirst for learning and a knack for problem-solving, I thrive in collaborative environments and am energized by tackling new challenges." />
            <Footer /> 
        </div>
    )
}

export default About