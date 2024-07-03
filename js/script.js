function enviarCorreo() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var comentario = document.getElementById('comentario').value;

    var templateParams = {
        from_name: nombre,
        to_name: 'administrador',
        message: comentario,
        email: correo
    };

    emailjs.send('service_01du8le', 'template_t2h7sw3', templateParams)
        .then(function(response) {
            console.log('Correo enviado correctamente', response);
            alert('Correo enviado correctamente');
        }, function(error) {
            console.log('Error al enviar el correo', error);
            alert('Error al enviar el correo');
        });
}