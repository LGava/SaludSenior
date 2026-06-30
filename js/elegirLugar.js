const lugares = document.querySelectorAll(".especialidad");
const btnSiguienteLugar = document.querySelector(".btn-siguiente");
const buscador = document.getElementById("buscarLugar");

lugares.forEach(lugar => {

    lugar.addEventListener("click", function(){

        lugares.forEach(l => l.classList.remove("seleccionada"));

        this.classList.add("seleccionada");

        const nombre = this.querySelector(".texto").textContent.trim();

        sessionStorage.setItem("lugar", nombre);

        btnSiguienteLugar.disabled = false;

    });

});

buscador.addEventListener("input", function(){

    const texto = this.value.toLowerCase();

    lugares.forEach(lugar => {

        if(lugar.innerText.toLowerCase().includes(texto)){

            lugar.style.display="flex";

        }else{

            lugar.style.display="none";

        }

    });

});