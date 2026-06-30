const pasos = document.querySelectorAll(".paso-form");
const botonesNext = document.querySelectorAll(".btn-siguiente-paso");
const botonesPrev = document.querySelectorAll(".btn-volver-paso");
const form = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");

function mostrarPaso(id){
    pasos.forEach(p => p.classList.remove("activo"));
    document.getElementById(id).classList.add("activo");
}

/* SIGUIENTE */
botonesNext.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        mostrarPaso(btn.dataset.next);
    });
});

/* VOLVER */
botonesPrev.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        mostrarPaso(btn.dataset.prev);
    });
});

/* FINAL REGISTRO */
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value;
    const confirmar = document.getElementById("confirmar").value;

    if(!nombre || !apellido || !dni || !telefono || !correo || !clave){
        mensaje.textContent = "Complete todos los campos";
        mensaje.style.color = "red";
        return;
    }

    if(clave !== confirmar){
        mensaje.textContent = "Las contraseñas no coinciden";
        mensaje.style.color = "red";
        return;
    }

    // 🔥 GUARDADO ÚNICO Y CORRECTO
    const usuario = {
        nombre,
        apellido,
        dni,
        telefono,
        correo,
        clave
    };

    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    mensaje.textContent = "Cuenta creada correctamente";
    mensaje.style.color = "green";

    setTimeout(()=>{
        window.location.href = "login.html";
    },1200);
});