import React from 'react';
import "./Navbar.css"; 
import { Link } from "react-scroll";
import logo from "../recursos/logoNav.svg";


function Navbar() {
    return (
        <div className="Navbar">
            <div className="navItems izquierda">
                <li key="1" className="navItems-text">
                    <Link to="regalosLanding" offset={-70} activeClass="active">
                        <span>REGALOS</span>
                    </Link>
                </li>
                <li key="2" className="navItems-text">
                    <Link to="productosLanding" offset={-30} activeClass="active">
                        <span>PRODUCTOS</span>
                    </Link>
                </li>
            </div>
            <div className="navLogo">
                <Link to="/" >
                    <img className="navLogo-img" src={logo} alt="Lago ITTI" />
                </Link>
            </div>
            <div className="navItems izquierda">
                <li key="3" className="navItems-text">
                    <Link to="marcasLanding" offset={-70} activeClass="active">
                        <span>MARCAS</span>
                    </Link>
                </li>
                <li key="4" className="navItems-text">
                    <Link to="contacto" offset={-70} activeClass="active">
                        <span>CONTACTO</span>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Navbar
