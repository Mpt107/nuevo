
//CONTACTO y SUSCRIPCION
//(validacion de login para ingresar)

document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtnombre = input.value;
  
    const feedbacknombre = document.getElementById("feedback-nombre");
    expr = /^[a-zA-Z\s]{4,30}$/;
    if (!expr.test(txtnombre)) {
      feedbacknombre.innerHTML = "Solo debe tener letras y debe tener entre 4 y 30 caracteres.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbacknombre.className = "invalid-feedback";
    } else {
      feedbacknombre.innerHTML = "El nombre esta correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbacknombre.className = "valid-feedback";
    }
  });


  document.getElementById("email").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtemail = input.value;
  
    const feedbackemail = document.getElementById("feedback-email");
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
    if (!expr.test(txtemail)) {
      feedbackemail.innerHTML = "Ingrese un email valido";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackemail.className = "invalid-feedback";
    } else {
      feedbackemail.innerHTML = "El email esta correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbacknombre.className = "valid-feedback";
    }
  });

  document.getElementById("asunto").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtasunto = input.value;
  
    const feedbackasunto = document.getElementById("feedback-asunto");
    expr = /^[a-zA-Z\s]{4,30}$/;
    if (!expr.test(txtasunto)) {
      feedbackasunto.innerHTML = "Solo debe tener letras y debe tener entre 4 y 30 caracteres.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackasunto.className = "invalid-feedback";
    } else {
      feedbackasunto.innerHTML = "El asunto esta correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackasunto.className = "valid-feedback";
    }
  });

  