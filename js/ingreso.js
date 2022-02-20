window.addEventListener("DOMContentLoaded", (eventoLoad) => {
    document.querySelector("#formagenadar").addEventListener("submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        
       
       
        const nombre    = $("#Nombreagendar").val();
        const apellido     = $("#apellidoagendar").val(); 
        const mascota     = $("#mascotaagendar").val(); 
        const email     = $("#emailagendar").val(); 
        const telefono     = $("#telefonoagendar").val(); 
        const fecha     = $("#fechaagendar").val(); 
        const hora     = $("#horasagendar").val(); 

      
        const nombreValido  = validarNombre(nombre);
        const apellidoValido   = validarApellido(apellido);
        const mascotaValido = validarMascota(mascota);
        const emailValido = validarEmail(mascota);
        const telefonoValido = validarTelefono(telefono);
        const fechaValido = validarFecha(fecha);
        const horaValido = validarHora(hora);




        if( nombreValido && apellidoValido && mascotaValido && emailValido && telefonoValido && fechaValido && horaValido){
            guardarDatosSuscriptor(nombre, apellido, mascota, email, telefono );
        } else {
            mostrarMensajeError();
        }
        return false;
    });
});

function guardarDatosSuscriptor(nombre, apellido, mascota, email, telefono, fecha, hora) {
    const urlSupabase   = 'https://ziwekexvsyfvwiuixtxj.supabase.co';
    const apiKey        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppd2VrZXh2c3lmdndpdWl4dHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2ODkzNzAsImV4cCI6MTk2MDI2NTM3MH0.0SVIhxk97NimVdTSdAWm2yYkS0CoBAytiVKP5Fh5SmI';
    const apiURL        = '/rest/v1/agendaHoras'; 
  
    const suscriptor = {
        nombre,
        apellido,
        mascota,
        email,
        telefono,
        fecha,
        hora
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
function validarApellido(apellido){ return true; } 
function validarMascota(mascota){ return true; } 
function validarEmail(email){ return true; } 
function validarTelefono(telefono){ return true; } 
function validarFecha(fecha){ return true; } 
function validarHora(hora){ return true; } 
