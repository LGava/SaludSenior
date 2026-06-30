

let botonFiltros = document.getElementById("boton+");
let contenidoFiltros = document.querySelector(".contenido-filtros");



botonFiltros.addEventListener("click", () => {

    contenidoFiltros.classList.toggle("filtros-abiertos");

    if (contenidoFiltros.classList.contains("filtros-abiertos")) {

        botonFiltros.textContent = "expand_less";

    }
    else {

        botonFiltros.textContent = "expand_more";

    }
});


