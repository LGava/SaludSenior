
const formulario = document.getElementById("formRecuperar");

formulario.addEventListener("submit", enviar);

function enviar(evento){

    evento.preventDefault();

    let dni = document.getElementById("dni").value;
    let correo = document.getElementById("correo").value;

    if(dni=="" && correo==""){

        alert("Ingrese su DNI o su correo electronico.");
        return;
    }

    alert("Las instrucciones fueron enviadas correctamente.");

    window.location.href="login.html";
}