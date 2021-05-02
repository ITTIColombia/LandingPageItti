import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Productos.css";
import Todos from "./DetailProductosTodos";
import Joyeria from "./DetailProductosJoyeria";
import Accesorios from "./DetailProductosAccesorios";
import NavProductos from './NavProductos';

function ProductosLanding() {
    return (
        <div className="ProductosLanding" id="productosLanding">
            <Router>
                <div className="productos-tit">
                    <h3>Productos</h3>
                </div>
                <NavProductos/>
                <div className="productos-content">
                    <Switch>
                        <Route path="/" exact component={Todos}/>
                        <Route path="/productosJoyeria" exact component={Joyeria}/>
                        <Route path="/productosAccesorios" exact component={Accesorios}/>
                    </Switch>
                </div>
            </Router>
            
        </div>
    )
}

export default ProductosLanding
