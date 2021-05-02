import React from 'react'
import foto1 from "../recursos/Joyeria/foto1.png";
import foto2 from "../recursos/Joyeria/foto2.svg";
import foto3 from "../recursos/Joyeria/foto3.png";
import foto4 from "../recursos/Joyeria/foto4.png";
import foto5 from "../recursos/Joyeria/foto5.png";
import foto6 from "../recursos/Joyeria/foto6.png";
import foto7 from "../recursos/Joyeria/foto7.png";
import foto8 from "../recursos/Joyeria/foto8.svg";
import foto9 from "../recursos/Joyeria/foto9.svg";
import "./Productos.css";

function DetailProductosJoyeria() {
    return (
        <div className="ProductosDetail">
            <div className="productos-columna">
                <img className="imgProducto" src={foto1} alt="Foto Producto" />
                <img className="imgProducto" src={foto2} alt="Foto Producto" />
                <img className="imgProducto" src={foto3} alt="Foto Producto" />
            </div>
            <div className="productos-columna">
                <img className="imgProducto" src={foto4} alt="Foto Producto" />
                <img className="imgProducto" src={foto5} alt="Foto Producto" />
                <img className="imgProducto" src={foto6} alt="Foto Producto" />
            </div>
            <div className="productos-columna">
                <img className="imgProducto" src={foto7} alt="Foto Producto" />
                <img className="imgProducto" src={foto8} alt="Foto Producto" />
                <img className="imgProducto" src={foto9} alt="Foto Producto" />
            </div>
        </div>
    )
}

export default DetailProductosJoyeria
