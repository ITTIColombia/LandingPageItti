import React from 'react'
import "./Marcas.css"; 
import marca1 from "../recursos/marca1.svg";
import marca2 from "../recursos/marca2.svg";
import marca3 from "../recursos/marca3.svg";
import marca4 from "../recursos/marca4.svg";
import marca5 from "../recursos/marca5.svg";


function Marcas() {
    return (
        <div className="MarcasLanding" id="marcasLanding">
            <div className="marcasLanding-tit">
                <h3>Marcas Populares</h3>
            </div>
            <div className="marcasLanding-content">
                <img className="img" src={marca1} alt="Marca 1" />
                <img className="img" src={marca2} alt="Marca 2" />
                <img className="img" src={marca3} alt="Marca 3" />
                <img className="img" src={marca4} alt="Marca 4" />
                <img className="img" src={marca5} alt="Marca 5" />
            </div>
            
        </div>
    )
}

export default Marcas
