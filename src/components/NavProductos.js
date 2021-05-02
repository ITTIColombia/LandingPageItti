import React from 'react'
import { NavLink} from 'react-router-dom';
import "./Productos.css";

function NavProductos() {
    return (
        <div className="productos-bar">
            <NavLink to="/" activeStyle={{color:"#BF522A"}} exact={true} >
                <p>TODOS</p>
            </NavLink>
            <NavLink to="/productosJoyeria" activeStyle={{color:"#BF522A"}}>
                <p>JOYERÍA</p>
            </NavLink>
            <NavLink to="/productosAccesorios" activeStyle={{color:"#BF522A"}}>
                <p>ACCESORIOS</p>
            </NavLink>
        </div>
    )
}

export default NavProductos
