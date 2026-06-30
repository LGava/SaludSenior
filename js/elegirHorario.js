document.addEventListener("DOMContentLoaded", () => {

    const horarios = document.querySelectorAll(".hora-disponible");
    const botonSiguiente = document.querySelector(".btn-siguiente");
    const textoFecha = document.getElementById("texto-fecha");

    // mostrar fecha
    const fechaGuardada = sessionStorage.getItem("fecha");

    if (textoFecha && fechaGuardada) {
        textoFecha.textContent = fechaGuardada;
    }

    // desactivar botón al inicio
    botonSiguiente.disabled = true;

    horarios.forEach(hora => {

        hora.addEventListener("click", function () {

            horarios.forEach(h => h.classList.remove("seleccionada"));

            this.classList.add("seleccionada");

            const horaSeleccionada = this.textContent.trim();

            sessionStorage.setItem("hora", horaSeleccionada);

            console.log("HORA GUARDADA:", horaSeleccionada);

            botonSiguiente.disabled = false;

        });

    });

    // SIGUIENTE
    botonSiguiente.addEventListener("click", function () {

        if (this.disabled) return;

        const proceso = sessionStorage.getItem("proceso");

        if (proceso === "reprogramar") {
            window.location.href = "resumenReprogramacion.html";
        } else {
            window.location.href = "resumenTurno.html";
        }

    });

});