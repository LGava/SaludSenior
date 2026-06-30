
document.addEventListener("DOMContentLoaded", () => {

    const set = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value || "No definido";
    };

    set("medico", sessionStorage.getItem("medico"));
    set("especialidad", sessionStorage.getItem("especialidad"));
    set("hospital", sessionStorage.getItem("hospital"));
    set("hospital2", sessionStorage.getItem("hospital"));
    set("fecha", sessionStorage.getItem("fecha"));
    set("hora", sessionStorage.getItem("hora"));
    set("lugar", sessionStorage.getItem("lugar"));

    // confirmar
    document.getElementById("confirmar").addEventListener("click", () => {

        sessionStorage.removeItem("proceso");

        window.location.href = "turnoReprogramado.html";

    });

});