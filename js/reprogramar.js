document.addEventListener("DOMContentLoaded", () => {

    // DEFINIR FLUJO
    sessionStorage.setItem("proceso", "reprogramar");


    // Cargar datos del turno original
    document.getElementById("medico").textContent =
        sessionStorage.getItem("medico") || "No definido";

    document.getElementById("fecha").textContent =
        sessionStorage.getItem("fecha") || "No definida";

    document.getElementById("hora").textContent =
        sessionStorage.getItem("hora") || "No definida";

    document.getElementById("lugar").textContent =
        sessionStorage.getItem("lugar") || "No definido";

});