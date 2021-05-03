import React from 'react'
import logo from "../recursos/logoFooter.svg";
import copy from "../recursos/copyright.svg";
import "./Footer.css"; 

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-logo">
                <img className="img" src={logo} alt="ITTI" />
                <div className="footer-copy">
                    <img className="copy" src={copy} alt="copyright" />
                    <p>2021 ITTI. All Rights Reserved.</p>
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-info-item">
                    <p>ENVÍANOS UN MENSAJE</p>
                    <a href="mailto:somositti@gmail.com">somositti@gmail.com</a>
                </div>
                <div className="footer-info-item">
                    <p>SÍGUENOS</p>
                    <a href="https://www.instagram.com/somositti/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
