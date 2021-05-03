import React, { Component } from 'react'
import "./Contacto.css"; 
import logo from "../recursos/palabraLogo.svg";
import emailjs from 'emailjs-com';

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
        const {mensaje, nombre, correo, tipo} = this.state.mensaje;
        const params = {message: mensaje, name: nombre, email: correo, userType: tipo};
        emailjs.send('service_ruy2cos','template_l12eqwy', params, 'user_1AVCQW2D8N6FMw6LVfyvu')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    };


    render(){
        return (
        <div className="Contacto" id="contacto">
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
