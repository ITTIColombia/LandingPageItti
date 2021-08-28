import React, {useEffect, useState} from 'react'
import "./Contacto.css";
import logo from "../recursos/palabraLogo.svg";
import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap';

function Contacto(props){

    const categories = ["Joyería", "Bisutería", "Accesorios", "Artesanías"]


    let [mensajeObj, setMensaje] = useState({
        nombre: '',
        correo: '',
        tipo: 'No seleccionado',
        mensaje: '',
        nombreMarca: "",
        tiempoMercado: "",
        rangoPrecios: "",
        ciudad: "",
        telefono: "",
        tipoMarca: "",
        direccion: "",
        presenciaDigital: false,
        mailSent: false,
        error: null
    });


    function handleInputChange(event) {
        const value = event.target.name === "presenciaDigital"? event.target.checked: event.target.value
        if(event.target.name === "tipo" && value === "Usuario"){
            setMensaje({
                ...mensajeObj,
                [event.target.name]: value,
                nombreMarca: "",
                tiempoMercado: "",
                rangoPrecios: "",
                ciudad: "",
                telefono: "",
                direccion: "",
                tipoMarca: "",
                presenciaDigital: false,
            });
        }else{
            setMensaje({...mensajeObj, [event.target.name]: value});
        }
    }
    


    function handleFormSubmit(e){
        e.preventDefault();
        const {mensaje, nombre, correo, tipo} = mensajeObj;
        const params = {message: mensaje, name: nombre, email: correo, userType: tipo};
        emailjs.send('service_ruy2cos','template_l12eqwy', params, 'user_1AVCQW2D8N6FMw6LVfyvu')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                return(
                    <div>
                    <Alert key="1" variant="success">
                        El mensaje se envío correctamente. 
                        ¡Pronto nos pondremos en contacto contigo!
                    </Alert>
                    </div>
                    );
            }, (err) => {
                console.log('FAILED...', err);
            });
    }


    return (
        <div>
            <div className="Contacto" id="contacto">
                <div className="form-container" onSubmit={e=>handleFormSubmit(e)}>
                    <form className="contacto-form" action="/mail.php">
                        <div className="contacto-form-primera">
                            <div>
                                <p>NOMBRE</p>
                                <input type="text" id="inputText1" name="nombre"  onChange={handleInputChange}/>
                            </div>
                            <div>
                                <p>EMAIL</p>
                                <input type="text" id="inputText2" name="correo" onChange={handleInputChange}/>
                            </div>
                        </div>
                        <p>TIPO DE USUARIO</p>
                        <select id="inputState" className="form-control" name="tipo" defaultValue={'DEFAULT'} onChange={handleInputChange}>
                            <option value="DEFAULT" disabled></option>
                            <option value="Emprendimiento">Quiero publicar mi marca</option>
                            <option value="Usuario">Estoy interesado en comprar</option>
                        </select>
                        { mensajeObj.tipo==="Emprendimiento" &&
                        <div>
                            <div className="contacto-form-primera">
                                <div>
                                    <p>NOMBRE DE LA MARCA</p>
                                    <input type="text" id="inputText1" name="nombreMarca"  onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <p>TIEMPO EN EL MERCADO</p>
                                    <input type="text" id="inputText2" name="tiempoMercado" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="contacto-form-primera">
                                <div>
                                    <p>RANGO DE PRECIOS</p>
                                    <input type="text" id="inputText2" name="rangoPrecios" onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <p>CIUDAD</p>
                                    <input type="text" id="inputText2" name="ciudad" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="contacto-form-primera">
                                <div>
                                    <p>NUMERO DE CONTACTO</p>
                                    <input type="number" id="inputText2" name="telefono" onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <p>DIRECCIÓN</p>
                                    <input type="number" id="inputText2" name="direccion" onChange={handleInputChange}/>
                                </div>

                            </div>
                            <p>TIPO DE MARCA</p>
                            <select id="inputState" className="form-control" name="tipoMarca" defaultValue={'DEFAULT'} onChange={handleInputChange}>
                                <option value="DEFAULT" disabled/>
                                {categories.map(category=><option value={category} key={category}>{category}</option>)}
                            </select>
                            <p>PRESENCIA DIGITAL</p>
                            <label className="switch">
                                <input type="checkbox" name="presenciaDigital" onChange={handleInputChange}/>
                                <span className="slider round"/>
                            </label>

                        </div>
                        }
                        <p>MENSAJE</p>
                        <textarea className="form-control" id="textArea" rows="2" name="mensaje" onChange={handleInputChange}/>
                        <button className="botonForm" type="submit">
                            <span>ENVIAR</span>
                        </button>
                    </form>
                </div>
                <div className="contacto-txt">
                    <h3>¿Quieres <span>formar</span> parte de <img className="img" src={logo} alt="ITTI" /> ?</h3>
                    <p>¡Si tienes una marca que quieres potenciar, si quieres encontrar regalos fácilmente o si simplemente eres un apasionado del talento local, déjanos tus datos y nos pondremos en contacto!</p>
                </div>
            </div>
            <div className="video">
                    <iframe width={670} height={377} src="https://www.youtube.com/embed/1tjDcMfoAzY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
        </div>
    )

}

export default Contacto