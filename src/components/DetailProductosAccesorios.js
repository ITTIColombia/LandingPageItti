import React from 'react'
import foto1 from "../recursos/Accesorios/foto1.png";
import foto2 from "../recursos/Accesorios/foto2.png";
import foto3 from "../recursos/Accesorios/foto3.png";
import foto4 from "../recursos/Accesorios/foto4.svg";
import foto5 from "../recursos/Accesorios/foto5.png";
import foto6 from "../recursos/Accesorios/foto6.svg";
import foto7 from "../recursos/Accesorios/foto7.svg";
import foto8 from "../recursos/Accesorios/foto8.png";
import foto9 from "../recursos/Accesorios/foto9.png";
import "./Productos.css";

function DetailProductosAccesorios() {
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

export default DetailProductosAccesorios
