

let especialidades = document.querySelectorAll(".especialidad");

especialidades.forEach((especialidad) => {

    especialidad.addEventListener("click", () => {

        especialidades.forEach((e) => {

            e.classList.remove("especialidad-seleccionada");

        });

        especialidad.classList.add("especialidad-seleccionada");
        botonSiguiente.disabled = false;

    });

});

