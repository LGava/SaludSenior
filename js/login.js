const formulario = document.getElementById("formLogin");
const mensaje = document.createElement("p");
formulario.appendChild(mensaje);

formulario.addEventListener("submit", validar);

function validar(e){

    e.preventDefault();

    const dni = document.getElementById("dni").value.trim();
    const clave = document.getElementById("clave").value.trim();

    const data = sessionStorage.getItem("usuario");

    if(!data){
        mensaje.textContent = "Debe registrarse primero";
        mensaje.style.color = "red";

        setTimeout(()=>{
            window.location.href = "registro.html";
        },1200);

        return;
    }

    const usuario = JSON.parse(data);

    if(dni !== usuario.dni){
        mensaje.textContent = "DNI incorrecto";
        mensaje.style.color = "red";
        return;
    }

    if(clave !== usuario.clave){
        mensaje.textContent = "Contraseña incorrecta";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "Inicio de sesión correcto";
    mensaje.style.color = "green";

    sessionStorage.setItem("logueado", "true");

    setTimeout(()=>{
        window.location.href = "inicio.html";
    },1200);
}