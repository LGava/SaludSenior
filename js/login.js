const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", validar);


function validar(evento){

    evento.preventDefault();

    let dni = document.getElementById("dni").value;
    let clave = document.getElementById("clave").value;

    if(dni == ""){

        alert("Ingrese su DNI.");
        return;
    }
    if(clave == ""){

        alert("Ingrese su contraseña.");
        return;
    }

    alert("Inicio de sesión correcto.");

    window.location.href="inicio.html";
}