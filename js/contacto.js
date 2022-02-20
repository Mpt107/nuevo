function registrar(event) {
    // evito que el formulario haga un submit normal
    // para manejarlo dentro de la función
    event.preventDefault();
    alert("su formulario fue enviado");
  //llamamos al boton 
    const boton = (document.getElementById("boton").disabled = true);
  
    // recuperar datos del formulario
  
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const fono = document.getElementById("asunto").value;
    const mensaje = document.getElementById("message").value;
  
    //envio de datos por API REST
    const baseURL = "https://ziwekexvsyfvwiuixtxj.supabase.co";
    const apiCall = "/rest/v1/contacto";
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppd2VrZXh2c3lmdndpdWl4dHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2ODkzNzAsImV4cCI6MTk2MDI2NTM3MH0.0SVIhxk97NimVdTSdAWm2yYkS0CoBAytiVKP5Fh5SmI";
    const url = baseURL + apiCall;
    
    // los elementos del cuerpo de body json
    const contacto = {
      //las const antes creadas
      
      nombre,
      email,
     asunto,
      mensaje,
    };
  //el fetch
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
        authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify(contacto),
    });
  }
  // nombre del formulario
  document
    .getElementById("contact-form")
    .addEventListener("submit", registrar);
  //registrar es la funcion que se creo primero