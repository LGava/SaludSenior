/*====================================
        FILTROS
=====================================*/

const botonFiltros = document.getElementById("boton+");
const contenidoFiltros = document.querySelector(".contenido-filtros");

botonFiltros.addEventListener("click", function () {

    contenidoFiltros.classList.toggle("filtros-abiertos");

    if (contenidoFiltros.classList.contains("filtros-abiertos")) {

        botonFiltros.textContent = "expand_less";

    } else {

        botonFiltros.textContent = "expand_more";

    }

});


/*====================================
        BUSCADOR
=====================================*/

const buscador = document.getElementById("buscarMedico");
const tarjetas = document.querySelectorAll(".tarjeta-medico");

buscador.addEventListener("keyup", function () {

    const texto = this.value.toLowerCase();

    tarjetas.forEach(function (tarjeta) {

        const contenido = tarjeta.textContent.toLowerCase();

        if (contenido.includes(texto)) {

            tarjeta.style.display = "flex";

        } else {

            tarjeta.style.display = "none";

        }

    });

});


/*====================================
        SELECCIONAR MÉDICO
=====================================*/

const botones = document.querySelectorAll(".btn-ver");

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const tarjeta = this.closest(".tarjeta-medico");

        const nombre = tarjeta.querySelector(".nombre-medico").textContent.trim();
        const experiencia = tarjeta.querySelector(".experiencia").textContent.trim();
        const hospital = tarjeta.querySelector(".hospital").textContent.trim();
        const puntaje = tarjeta.querySelector(".puntaje").textContent.trim();

        sessionStorage.setItem("medico", nombre);
        sessionStorage.setItem("hospital", hospital);
        sessionStorage.setItem("experiencia", experiencia);
        sessionStorage.setItem("puntaje", puntaje);

        window.location.href = "elegirFecha.html";

    });

});


/*====================================
        CARGA INICIAL
=====================================*/

window.addEventListener("load", function () {

    const especialidad = sessionStorage.getItem("especialidad");

    if (especialidad) {

        document.querySelector(".encabezado p").textContent =
            "Especialidad seleccionada: " + especialidad;

    }

});