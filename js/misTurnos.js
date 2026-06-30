//=====================================
// BOTONES
//=====================================

const botonesDetalle = document.querySelectorAll(".detalle");
const botonesCancelar = document.querySelectorAll(".cancelar");
const botonesReprogramar = document.querySelectorAll(".reprogramar");
const botonVolver = document.querySelector(".volver");

//=====================================
// VER DETALLE
//=====================================

botonesDetalle.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const turno = this.closest(".turno");

        const especialidad = turno.querySelector("h2").textContent.trim();

        alert(
            "Detalle del turno\n\n" +
            "Especialidad: " + especialidad + "\n\n" +
            "Consulte esta información el día de la atención."
        );

    });

});

//=====================================
// CANCELAR TURNO
//=====================================

botonesCancelar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        let respuesta = confirm("¿Desea cancelar este turno?");

        if(respuesta){

            window.location.href = "cancelarTurno.html";

        }

    });

});

//=====================================
// REPROGRAMAR
//=====================================

botonesReprogramar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        sessionStorage.setItem("proceso", "reprogramar");

        window.location.href = "reprogramarTurno.html";

    });

});

//=====================================
// VOLVER
//=====================================

botonVolver.addEventListener("click", function () {

    window.location.href = "inicio.html";

});