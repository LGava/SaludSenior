const dias = document.querySelectorAll(".dia");
const textoFecha = document.getElementById("texto-fecha");
const botonSiguiente = document.querySelector(".btn-siguiente");

const especialidad = sessionStorage.getItem("especialidad");
const medico = sessionStorage.getItem("medico");

document.getElementById("especialidadSeleccionada").textContent =
    especialidad || "No seleccionada";

document.getElementById("medicoSeleccionado").textContent =
    medico || "No seleccionado";

// SELECCIÓN DE FECHA
dias.forEach(dia => {

    dia.addEventListener("click", function () {

        dias.forEach(d => d.classList.remove("fechaSeleccionada"));

        this.classList.add("fechaSeleccionada");

        const fecha = this.textContent.trim() + " de Junio de 2026";

        textoFecha.textContent = fecha;

        sessionStorage.setItem("fecha", fecha);

        // IMPORTANTE: reset horario anterior
        sessionStorage.removeItem("hora");

        botonSiguiente.disabled = false;

    });

});

// SIGUIENTE
botonSiguiente.addEventListener("click", function () {

    if (this.disabled) return;

    window.location.href = "elegirHorario.html";

});