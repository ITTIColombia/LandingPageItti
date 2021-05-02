import React, { Component } from 'react'
import "./Contacto.css"; 
import logo from "../recursos/palabraLogo.svg";
import axios from 'axios';

const API_PATH = 'http://localhost:3000/src/components/mail.php';

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = { mensaje: {
            nombre: '',
            correo: '',
            tipo: 'No seleccionado',
            mensaje: '',
            mailSent: false,
            error: null
        }, show: false };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ mensaje: { ...this.state.mensaje, [event.target.name]: event.target.value } });
    }


    handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state.mensaje
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ ...this.state.mensaje, [error]: error.message }));
    };


    render(){
        return (
        <div className="Contacto">
            <div className="form-container">
                <form className="contacto-form" action="/mail.php">
                    <div className="contacto-form-primera">
                        <div>
                            <p>NOMBRE</p>
                            <input type="text" id="inputText1" name="nombre"  onChange={this.handleInputChange}/>
                        </div>
                        <div>
                            <p>EMAIL</p>
                            <input type="text" id="inputText2" name="correo" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <p>TIPO DE USUARIO</p>
                    <select id="inputState" className="form-control" name="tipo" defaultValue={'DEFAULT'} onChange={this.handleInputChange}>
                        <option value="DEFAULT" disabled></option>
                        <option value="Emprendimiento">Quiero publicar mi marca</option>
                        <option value="Usuario">Estoy interesado en comprar</option>
                    </select>
                    <p>MENSAJE</p>
                    <textarea className="form-control" id="textArea" rows="2" name="mensaje" onChange={this.handleInputChange}/>
                    <button className="botonForm" type="submit" onClick={e => this.handleFormSubmit(e)}>
                        <span>ENVIAR</span>
                    </button>
                </form>
            </div>
            <div className="contacto-txt">
                <h3>¿Quieres <span>formar</span> parte de <img className="img" src={logo} alt="ITTI" /> ?</h3>
                <p>¡Si tienes una marca que quieres potenciar, si quieres encontrar regalos fácilmente o si simplemente eres un apasionado del talento local, déjanos tus datos y nos pondremos en contacto!</p>
            </div>
            
        </div>
        )
    }
    
}

export default Contacto
