function registrar(event) {
   
    event.preventDefault();
    alert("su formulario fue enviado");
 
    const boton = (document.getElementById("boton").disabled = true);
  
   
  
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const fono = document.getElementById("asunto").value;
    const mensaje = document.getElementById("message").value;
  

    const baseURL = "https://ziwekexvsyfvwiuixtxj.supabase.co";
    const apiCall = "/rest/v1/contacto";
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppd2VrZXh2c3lmdndpdWl4dHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2ODkzNzAsImV4cCI6MTk2MDI2NTM3MH0.0SVIhxk97NimVdTSdAWm2yYkS0CoBAytiVKP5Fh5SmI";
    const url = baseURL + apiCall;
    
    const contacto = {
      
      
      nombre,
      email,
     asunto,
      mensaje,
    };
 
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
 
  document
    .getElementById("contact-form")
    .addEventListener("submit", registrar);