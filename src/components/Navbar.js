import React from 'react';
import "./Navbar.css"; 
import { NavLink } from 'react-router-dom';
import logo from "../recursos/logoNav.svg";


function Navbar() {
    return (
        <div className="Navbar">
            <div className="navItems izquierda">
                <li key="1" className="navItems-text">
                    <NavLink to="/regalosLanding" activeStyle={{color:"#000000"}} exact={true} activeClassName="active">
                        <span>REGALOS</span>
                    </NavLink>
                </li>
                <li key="2" className="navItems-text">
                    <NavLink to="/productosLanding" activeStyle={{color:"#000000"}} activeClassName="active">
                        <span>PRODUCTOS</span>
                    </NavLink>
                </li>
            </div>
            <div className="navLogo">
                <NavLink to="/" >
                    <img className="navLogo-img" src={logo} alt="Lago ITTI" />
                </NavLink>
            </div>
            <div className="navItems izquierda">
                <li key="3" className="navItems-text">
                    <NavLink to="/marcasLanding" activeStyle={{color:"#000000"}} activeClassName="active">
                        <span>MARCAS</span>
                    </NavLink>
                </li>
                <li key="4" className="navItems-text">
                    <NavLink to="/contactoLanding" activeStyle={{color:"#000000"}} activeClassName="active">
                        <span>CONTACTO</span>
                    </NavLink>
                </li>
            </div>
        </div>
    )
}

export default Navbar
