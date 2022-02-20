window.addEventListener('DOMContentLoaded', (eventoLoaded) => {    
    document.getElementById("form1").addEventListener(
    "submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        const email = document.querySelector("#email").value;
        const contrasena = document.querySelector("#contrasena").value;
        const emailValido = emailEsValido(email);
        const contrasenaValida = contrasenaEsValida(contrasena);
        const usuarioOk = checkUsuario(email, contrasena);
        if( emailValido && 
            contrasenaValida && 
            usuarioOk 
        ){
            redirigirAPaginaPrincipal();
        } else {
            mostrarMensajesError();
        }
        return false;
    });
});

function redirigirAPaginaPrincipal() {
    window.location = "Admin.html";
}

function mostrarMensajesError() {
    // <div class="alert alert-danger" role="alert">Lorem</div>
    const divAlerta = document.createElement("div");
    divAlerta.className = "alert alert-danger";
    divAlerta.setAttribute("role", "alert");
    const mensaje = document.createTextNode("Por favor revise que su email o contraseña sean correctos.");
    divAlerta.appendChild(mensaje);
    document.querySelector("#mensajes").appendChild(divAlerta);
}

function emailEsValido(email) {
    const emailRegexp = new RegExp(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i
      );
      return emailRegexp.test(email);
}

function contrasenaEsValida(contrasena) {
    if( contrasena.length >= 3 ) {
        return true;
    } else {
        return false;
    }
}

function checkUsuario(email, contrasena) {
    if( email == "Admin@Clinica.cl" && contrasena == "11111") {
        return true;
    } else {
        return false;
    }
}