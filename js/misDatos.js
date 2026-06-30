//====================================
// OBTENER ELEMENTOS
//====================================

const formulario = document.getElementById("formDatos");

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputDni = document.getElementById("dni");
const inputCorreo = document.getElementById("correo");

const textoUsuario = document.getElementById("nombreUsuario");
const botonDetalles = document.querySelector(".botonVerDetalles");

//====================================
// CARGAR DATOS DEL USUARIO
//====================================

window.addEventListener("load", cargarDatos);

function cargarDatos(){

    let nombre = sessionStorage.getItem("nombre");
    let apellido = sessionStorage.getItem("apellido");
    let dni = sessionStorage.getItem("dni");
    let correo = sessionStorage.getItem("correo");

    if(nombre){

        inputNombre.value = nombre;
        textoUsuario.textContent = "Hola, " + nombre;

    }else{

        textoUsuario.textContent = "Hola";

    }

    if(apellido){

        inputApellido.value = apellido;

    }

    if(dni){

        inputDni.value = dni;

    }

    if(correo){

        inputCorreo.value = correo;

    }

}

//====================================
// GUARDAR CAMBIOS
//====================================

formulario.addEventListener("submit", guardarDatos);

function guardarDatos(evento){

    evento.preventDefault();

    let nombre = inputNombre.value.trim();
    let apellido = inputApellido.value.trim();
    let correo = inputCorreo.value.trim();

    if(nombre == ""){

        alert("Ingrese su nombre.");
        inputNombre.focus();
        return;

    }

    if(apellido == ""){

        alert("Ingrese su apellido.");
        inputApellido.focus();
        return;

    }

    if(correo == ""){

        alert("Ingrese su correo electrónico.");
        inputCorreo.focus();
        return;

    }

    if(!correo.includes("@")){

        alert("Ingrese un correo válido.");
        inputCorreo.focus();
        return;

    }

    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("apellido", apellido);
    sessionStorage.setItem("correo", correo);

    textoUsuario.textContent = "Hola, " + nombre;

    alert("Los datos fueron actualizados correctamente.");

}

//====================================
// VER DETALLES DEL TURNO
//====================================

if(botonDetalles){

    botonDetalles.addEventListener("click", function(){

        alert(
            "Especialidad: Traumatología\n\n" +
            "Profesional: Dr. Stephen Strange\n\n" +
            "Fecha: Jueves 16 de mayo de 2026\n\n" +
            "Hora: 13:30 hs\n\n" +
            "Estado: Confirmado"
        );

    });

}

//====================================
// VOLVER AL INICIO
//====================================

const botonVolver = document.querySelector(".volver");

if(botonVolver){

    botonVolver.addEventListener("click", function(){

        window.location.href = "inicio.html";

    });

}