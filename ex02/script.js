const boton = document.getElementById("clasificar");
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {

    const nota = Number(inputNota.value);

    if (inputNota.value === "") {
        resultado.textContent = "Introduce una nota.";
    }
    else if (nota < 0 || nota > 20) {
        resultado.textContent = "La nota debe estar entre 0 y 20.";
    }
    else if (nota < 10) {
        resultado.textContent = "Clasificación: Suspenso";
    }
    else if (nota < 14) {
        resultado.textContent = "Clasificación: Aprobado";
    }
    else if (nota < 17) {
        resultado.textContent = "Clasificación: Notable";
    }
    else {
        resultado.textContent = "Clasificación: Sobresaliente";
    }

});