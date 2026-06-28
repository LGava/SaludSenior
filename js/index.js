
// controlar el tamaño de letra
let tamañoFuente = 20;

const botonAumentar = document.getElementById("aumentar");
const botonDisminuir = document.getElementById("disminuir");
const botonContraste = document.getElementById("contraste");

const botonLogin = document.getElementById("btnLogin");
const botonRegistro = document.getElementById("btnRegistro");


// Funcion para aumentar la letra
function aumentarFuente(){

    tamañoFuente = tamañoFuente + 2;
    document.body.style.fontSize = tamañoFuente + "px";
}


// Funcion para disminuir la letra
function disminuirFuente(){

    if(tamañoFuente > 16){
        tamañoFuente = tamañoFuente - 2;
        document.body.style.fontSize = tamañoFuente + "px";
    }
}


//controlar el contraste
let contrasteActivo = false;

// Funcion para cambiar el contraste
function cambiarContraste(){

    if(contrasteActivo == false){
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#FFFFFF";

        contrasteActivo = true;

    }else{
        document.body.style.backgroundColor = "#F5F5F5";
        document.body.style.color = "#333333";

        contrasteActivo = false;
    }
}


function iniciarSesion(){
    window.location.href = "login.html";
}

function registrarse(){
    window.location.href = "registro.html";
}


botonAumentar.addEventListener("click", aumentarFuente);
botonDisminuir.addEventListener("click", disminuirFuente);
botonContraste.addEventListener("click", cambiarContraste);
botonLogin.addEventListener("click", iniciarSesion);
botonRegistro.addEventListener("click", registrarse);