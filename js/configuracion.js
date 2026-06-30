//=====================================
// TAMAÑO DE LETRA
//=====================================

let tamaño = 20;

const botonAumentar = document.getElementById("aumentar");
const botonDisminuir = document.getElementById("disminuir");
const botonNormal = document.getElementById("normal");

botonAumentar.addEventListener("click", function () {

    tamaño += 2;
    document.body.style.fontSize = tamaño + "px";

});

botonDisminuir.addEventListener("click", function () {

    if (tamaño > 16) {

        tamaño -= 2;
        document.body.style.fontSize = tamaño + "px";

    }

});

botonNormal.addEventListener("click", function () {

    tamaño = 20;
    document.body.style.fontSize = "20px";

});


//=====================================
// ALTO CONTRASTE
//=====================================

let contraste = false;

const botonContraste = document.getElementById("contraste");

botonContraste.addEventListener("click", function () {

    contraste = !contraste;

    if (contraste) {

        document.body.classList.add("alto-contraste");
        this.textContent = "Desactivar contraste";

    } else {

        document.body.classList.remove("alto-contraste");
        this.textContent = "Activar contraste";

    }

});


//=====================================
// SONIDOS
//=====================================

const sonidos = document.getElementById("sonidos");

sonidos.addEventListener("change", function () {

    if (this.checked) {

        alert("Los sonidos fueron activados.");

    } else {

        alert("Los sonidos fueron desactivados.");

    }

});


//=====================================
// GUARDAR CONFIGURACIÓN
//=====================================

const botonGuardar = document.getElementById("guardar");

botonGuardar.addEventListener("click", function () {

    alert("La configuración fue guardada correctamente.");

});


//=====================================
// VOLVER
//=====================================

const botonVolver = document.querySelector(".volver");

botonVolver.addEventListener("click", function () {

    window.location.href = "inicio.html";

});


//=====================================
// MOSTRAR USUARIO
//=====================================

const textoUsuario = document.getElementById("nombreUsuario");

if (textoUsuario) {

    const nombre = sessionStorage.getItem("nombre");

    if (nombre) {

        textoUsuario.textContent = "Hola, " + nombre;

    } else {

        textoUsuario.textContent = "Hola";

    }

}