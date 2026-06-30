const formulario = document.getElementById("formRecuperar");
const botonVolver = document.querySelector(".volver");

formulario.addEventListener("submit", recuperarCuenta);

function recuperarCuenta(evento){

    evento.preventDefault();

    const dni = document.getElementById("dni").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if(dni === "" && correo === ""){

        alert("Ingrese su DNI o su correo electrónico.");
        return;

    }

    if(correo !== ""){

        if(!correo.includes("@")){

            alert("Ingrese un correo electrónico válido.");
            return;

        }

    }

    alert(
        "Las instrucciones para recuperar su contraseña fueron enviadas correctamente."
    );

    window.location.href = "login.html";

}

botonVolver.onclick = function(){

    window.location.href = "login.html";

};