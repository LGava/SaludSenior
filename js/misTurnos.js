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

        const turno = this.closest(".turno");

        const especialidad = turno.querySelector("h2").textContent.trim();

        const datos = turno.querySelectorAll("p");

        const medico = datos[0].textContent.replace("person", "").replace("Médico:", "").trim();
        const fecha = datos[1].textContent.replace("calendar_month", "").replace("Fecha:", "").trim();
        const hora = datos[2].textContent.replace("schedule", "").replace("Hora:", "").trim();
        const lugar = datos[3].textContent.replace("location_on", "").replace("Lugar:", "").trim();

        sessionStorage.setItem("proceso", "reprogramar");

        sessionStorage.setItem("especialidad", especialidad);
        sessionStorage.setItem("medico", medico);
        sessionStorage.setItem("fecha", fecha);
        sessionStorage.setItem("hora", hora);
        sessionStorage.setItem("lugar", lugar);

        window.location.href = "reprogramarTurno.html";

    });

});

//=====================================
// VOLVER
//=====================================

botonVolver.addEventListener("click", function () {

    window.location.href = "inicio.html";

});