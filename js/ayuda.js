// =====================
// ACORDEÓN PROFESIONAL
// =====================

document.querySelectorAll(".acordeon").forEach(btn => {

    btn.addEventListener("click", () => {

        const panel = btn.nextElementSibling;
        const icon = btn.querySelector(".material-symbols-rounded");

        const abierto = panel.classList.contains("open");

        document.querySelectorAll(".panel").forEach(p => {
            p.classList.remove("open");
        });

        document.querySelectorAll(".acordeon").forEach(b => {
            b.classList.remove("active");
        });

        if (!abierto) {
            panel.classList.add("open");
            btn.classList.add("active");
        }

    });

});


// =====================
// FORMULARIO
// =====================

document.getElementById("consulta")?.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Complete todos los campos.");
        return;
    }

    alert("Consulta enviada correctamente. Un asesor le responderá pronto.");

    this.reset();

});


// =====================
// WHATSAPP REAL
// =====================

document.getElementById("whatsapp")?.addEventListener("click", () => {

    const numero = "541112345678";

    window.open(`https://wa.me/${numero}`, "_blank");

});


// =====================
// VOLVER
// =====================

document.getElementById("volver")?.addEventListener("click", () => {

    window.location.href = "inicio.html";

});