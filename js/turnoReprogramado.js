
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("fecha").textContent =
        sessionStorage.getItem("fecha");

    document.getElementById("hora").textContent =
        sessionStorage.getItem("hora");

    document.getElementById("especialidad").textContent =
        sessionStorage.getItem("especialidad");

});