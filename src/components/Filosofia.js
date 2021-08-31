import React from 'react'
import "./Filosofia.css"; 

function Filosofia() {
    return (
        <div className="Filosofia">
            <div className="filosofia-title">
                <h3>Nuestra Filosofía</h3>
            </div>
            <div className="filosofia-content">
                <div className="filosofia-content-item">
                    <p className="filosofia-content-item-tit">Regalar</p>
                    <p className="filosofia-content-item-det">Agilizamos la búsqueda de regalos originales y diferentes al encontrar productos que se ajusten a tus deseos y necesidades</p>
                </div>
                <div className="filosofia-content-item">
                    <p className="filosofia-content-item-tit">Descubrir</p>
                    <p className="filosofia-content-item-det">Facilitamos el descubrimiento de pequeñas marcas de joyas y accesorios colombianas y novedosas</p>
                </div>
                <div className="filosofia-content-item">
                    <p className="filosofia-content-item-tit">Apoyar</p>
                    <p className="filosofia-content-item-det">Les damos una plataforma a pequeños emprendimientos de joyas y accesorios locales para darse a conocer a un público interesado en comprar</p>
                </div>
                <div className="filosofia-content-item">
                    <p className="filosofia-content-item-tit">Sobresalir</p>
                    <p className="filosofia-content-item-det">Acogemos marcas emergentes que no estén registradas ni formalizadas dándoles la posibilidad de sobresalir lejos de grandes marcas tradicionales</p>
                </div>

            </div>
            
        </div>
    )
}

export default Filosofia
