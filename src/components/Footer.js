import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Federal Capital Teritory.</p>
                            <p>Abuja</p>
                        </div>
                        <div className="phone">
                            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +234 703 7729 150</h4>
                        </div>
                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> patrickchinwafor@gmail.com</h4>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>I'm a results-driven software engineer with a strong background in building interactive and user-friendly web    applications, with proven hands-on experience.</p>
                    <div className="social">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer