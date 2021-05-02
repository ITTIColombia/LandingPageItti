import React from 'react'
import foto from "../recursos/fotoPrimera.jpg";
import itti from "../recursos/miniItti.svg";
import "./Banner.css"; 

function Banner() {
    return (
        <div className="Banner">
                <div className="banner-izquierda">
                    <div className="banner-izquierda-text">
                        <img className="banner-izquierda-img" src={itti} alt="En ITTI" />
                        <h3>Somos una <span>comunidad</span> que cree en el talento colombiano</h3>
                        <p>Encontramos joyas y accesorios perfectos para tus regalos mientras te invitamos a descubrir un mundo lleno de inspiración, tesoros y creaciones locales.</p>
                    </div>
                </div>
                <div className="banner-derecha">
                    <img className="banner-img" src={foto} alt="Foto Banner ITTI" />
                </div>
            
        </div>
    )
}

export default Banner
