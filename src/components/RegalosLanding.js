import React from 'react'
import foto from "../recursos/fotosRegalo.svg";
import "./Regalos.css"; 
import { Link } from 'react-scroll';

function RegalosLanding() {
    return (
        <div className="RegalosLanding" id="regalosLanding">
            <div className="regalos-text">
                <h3>Encontramos tu <span>regalo</span> soñado</h3>
                <p>Responde unas preguntas cortas y te recomendaremos un producto 100% colombiano ideal para ti</p>
                <div className="regalos-boton">
                    <Link to="contacto" offset={-70} activeClass="active">
                        <span>SABER MÁS</span>
                    </Link>
                </div>
            </div>
            <div className="regalos-img">
                <img className="img" src={foto} alt="Fotos Regalos" />
            </div>
            
        </div>
    )
}

export default RegalosLanding
