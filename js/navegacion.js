document.addEventListener("DOMContentLoaded", () => {

    function ir(pagina) {
        if (pagina) window.location.href = pagina;
    }

    const botonVolver = document.querySelector(".btn-volver");
    const botonSiguiente = document.querySelector(".btn-siguiente");
    const botonCerrar = document.getElementById("cerrarSesion");

    /* VOLVER */
    if (botonVolver) {
        botonVolver.addEventListener("click", function () {
            ir(this.dataset.anterior);
        });
    }

    /* SIGUIENTE */
    if (botonSiguiente) {
        botonSiguiente.addEventListener("click", function () {

            if (this.disabled) return;

            const proceso = sessionStorage.getItem("proceso");

            const destino = this.dataset.siguiente;

            // CASO ESPECIAL
            if (destino === "resumen") {
                if (proceso === "reprogramar") {
                    ir("resumenReprogramacion.html");
                } else {
                    ir("resumenTurno.html");
                }
                return;
            }

            ir(destino);
        });
    }

    /* CERRAR SESIÓN */
    if (botonCerrar) {
        botonCerrar.addEventListener("click", function () {

            if (confirm("¿Desea cerrar la sesión?")) {
                sessionStorage.clear();
                ir("index.html");
            }

        });
    }

    /* CALENDARIO */
    document.querySelectorAll(".dia").forEach(dia => {

        dia.addEventListener("click", function () {

            document.querySelectorAll(".dia").forEach(d =>
                d.classList.remove("seleccionado")
            );

            this.classList.add("seleccionado");

            sessionStorage.setItem("fecha", this.textContent.trim());

            if (botonSiguiente) botonSiguiente.disabled = false;

        });

    });

    /* USUARIO */
    const nombre = sessionStorage.getItem("nombre");
    const textoUsuario = document.getElementById("nombreUsuario");

    if (textoUsuario) {
        textoUsuario.textContent = nombre ? "Hola, " + nombre : "Hola";
    }

});