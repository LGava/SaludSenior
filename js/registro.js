
const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", validarRegistro);

function validarRegistro(evento){

    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;
    let confirmar = document.getElementById("confirmar").value;

    if(nombre==""){

        alert("Ingrese su nombre.");
        return;
    }

    if(apellido==""){

        alert("Ingrese su apellido.");
        return;
    }

    if(dni==""){

        alert("Ingrese su DNI.");
        return;
    }

    if(telefono==""){

        alert("Ingrese su teléfono.");
        return;
    }

    if(correo==""){

        alert("Ingrese su correo.");
        return;
    }

    if(clave==""){

        alert("Ingrese una contraseña.");
        return;
    }

    if(clave!=confirmar){

        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Registro realizado correctamente.");

    window.location.href="login.html";
}