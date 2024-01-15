import "./HeroImg.css"
import React from 'react'
import IntroImg from "../assets/intro-img.jpeg"
import { Link } from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M NWAFOR CHINEDU</p>
                <h1>Software Developer.</h1>
                <div>
                    <Link to="/project" className="btn ">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg