

let botonSiguiente = document.querySelector(".btn-siguiente");
let botonVolver = document.querySelector(".btn-volver");


if (botonSiguiente) {
botonSiguiente.addEventListener("click", () => {

    let pagina = botonSiguiente.dataset.siguiente;

    window.location.href = pagina;
    

});

}
if (botonVolver) {
    
botonVolver.addEventListener("click", () => {

    let pagina = botonVolver.dataset.anterior;

    window.location.href = pagina;

});

}

let botonesVer = document.querySelectorAll(".btn-ver");

botonesVer.forEach((boton) => {

    boton.addEventListener("click", () => {

        window.location.href = "elegirFecha.html";

    });

});


//calendario 
let dias = document.querySelectorAll(".dia");

dias.forEach((dia) => {

    dia.addEventListener("click", () => {

        dias.forEach((d) => {

            d.classList.remove("seleccionado");

        });

        dia.classList.add("seleccionado");
        botonSiguiente.disabled = false;
    });

});

//HORARIO

let horas = document.querySelectorAll(".hora-disponible");

horas.forEach((hora) => {

    hora.addEventListener("click", () => {

        horas.forEach((d) => {

            d.classList.remove("seleccionado");

        });

        hora.classList.add("seleccionado");
        botonSiguiente.disabled = false;
    });

});

//turno confirmado inicio

let botonInicio = document.querySelector(".btn-volver2");

if (botonInicio) {
botonInicio.addEventListener("click", () => {

    let pagina = botonInicio.dataset.anterior;

    window.location.href = pagina;
    

});

}