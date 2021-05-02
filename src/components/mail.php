<?php
//get data from form  
$nombre = $_POST['nombre'];
$correo= $_POST['correo'];
$tipo= $_POST['tipo'];
$mensaje= $_POST['mensaje'];
$to = "somositti@mail.com";
$subject = "Contacto Website";
$txt ="Nombre: ". $nombre . "\r\n  Correo: " . $correo . "\r\n Tipo Usuario:" . $tipo . "\r\n Message:" . $message;
$headers = "De: somositti@gmail.com";
if($correo!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>