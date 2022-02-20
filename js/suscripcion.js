window.addEventListener("DOMContentLoaded", (eventoLoad) => {
    document.querySelector("#suscripcionform").addEventListener("submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        
       
       
        const nombre    = $("#nombre").val();
        const email     = $("#email").val(); 

      
        const nombreValido  = validarNombre(nombre);
        const emailValido   = validarEmail(email);

        if( nombreValido && emailValido){
            guardarDatosSuscriptor(nombre, email);
        } else {
            mostrarMensajeError();
        }
        return false;
    });
});

function guardarDatosSuscriptor(nombre, email) {
    const urlSupabase   = 'https://ziwekexvsyfvwiuixtxj.supabase.co';
    const apiKey        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppd2VrZXh2c3lmdndpdWl4dHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2ODkzNzAsImV4cCI6MTk2MDI2NTM3MH0.0SVIhxk97NimVdTSdAWm2yYkS0CoBAytiVKP5Fh5SmI';
    const apiURL        = '/rest/v1/suscriptores'; 
  
    const suscriptor = {
        nombre,
        email
    }; 

    const url = urlSupabase + apiURL; 
    const resultadoFetch = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey,
            "Prefer": "return=representation" 
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
    }).catch( err => console.dir(err) ) 
    ;
}

function mostrarMensajeExito(data){
    const id = data[0].id;
    $("#mensajes").addClass("alert alert-success").html("Se ha guardado correctamente su suscripción con el ID #" + id);
}
function mostrarMensajeError(){}  
function validarNombre(nombre){ return true; } 
function validarEmail(email){ return true; } 