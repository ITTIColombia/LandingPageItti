import React from 'react';
import foto1 from "../recursos/Todos/foto1.png";
import foto2 from "../recursos/Todos/foto2.svg";
import foto3 from "../recursos/Todos/foto3.png";
import foto4 from "../recursos/Todos/foto4.svg";
import foto5 from "../recursos/Todos/foto5.png";
import foto6 from "../recursos/Todos/foto6.svg";
import foto7 from "../recursos/Todos/foto7.svg";
import foto8 from "../recursos/Todos/foto8.svg";
import foto9 from "../recursos/Todos/foto9.svg";
import "./Productos.css";

function DetailProductosTodos() {
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

export default DetailProductosTodos
