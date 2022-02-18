window.addEventListener("DOMContentLoaded", (eventoLoad) => {
    document.querySelector("form").addEventListener("submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        
      
        // jQuery 
        const nombre    =  $("#nombre").val();
        const email     =  $("#email").val(); 
        const asunto     = $("#asunto").val();
        const message    = $("#message").val();


        // validaciones 
        const nombreValido  = validarNombre(nombre);
        const emailValido   = validarEmail(email);
        const asuntoValido = validarAsunto(asunto);
        const messageValido = ValidarMessage(message)

        if( nombreValido && emailValido && asuntoValido && messageValido ){
            guardarDatos(nombre, email, asunto, message);
        } else {
            mostrarMensajeError();
        }
        return false;
    });
});

function guardarDatos(nombre, email, asunto, message) {
    const urlSupabase   = 'https://ziwekexvsyfvwiuixtxj.supabase.co';
    const apiKey        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppd2VrZXh2c3lmdndpdWl4dHhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDY4OTM3MCwiZXhwIjoxOTYwMjY1MzcwfQ.6a5YtTU_6QyC3PBkOWkktv9stwjxobpMIegSSvafxoc';
    const apiURL        = '/rest/v1/contacto'; // reemplazar con el nombre de su tabla 

    // Javascript Object Notation (JSON)
    const suscriptor = {
        nombre,
        email,
        asunto,
        message
    }; // por ej. {nombre: 'Juanito Perez', email: 'juanito@123.cl'}

    const url = urlSupabase + apiURL; // url = https://hqkjyiudhohhocdkuslx.supabase.co/rest/v1/suscriptores
    const resultadoFetch = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey,
            "Prefer": "return=representation" //Prefer: return=representation
        },
        body: JSON.stringify( suscriptor )
    }).then( response => {
        if( response.ok ) {
            const r = response.json();
            return r;
        } else {
            console.error("Ocurrió un error al invocar la API de Supabase");
        }
    }).then( data => {
        mostrarMensajeExito(data);
    }).catch( err => console.dir(err) ) // se invoca catch() cuando hay un error en la red 
    ;
}

function mostrarMensajeExito(data){
    const id = data[0].id;
    $("#mensajes").addClass("alert alert-success").html("Se ha guardado correctamente su suscripción con el ID #" + id);
}
function mostrarMensajeError(){} // Uds. lo implementan 
function validarNombre(nombre){ return true; } // Uds. lo implementan
function validarEmail(email){ return true; } // Uds. lo implementan
function validarAsunto(asunto){ return true; }
function ValidarMessage(message){ return true; }