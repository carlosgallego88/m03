function validarNumero(valor) {
    return typeof valor === "number" && !Number.isNaN(valor);
}

function add(a, b) {
    if (!validarNumero(a) || !validarNumero(b)) {
        return "Error: argumentos no válidos";
    }

    return a + b;
}

function subtract(a, b) {
    if (!validarNumero(a) || !validarNumero(b)) {
        return "Error: argumentos no válidos";
    }

    return a - b;
}

function multiply(a, b) {
    if (!validarNumero(a) || !validarNumero(b)) {
        return "Error: argumentos no válidos";
    }

    return a * b;
}

function divide(a, b) {
    if (!validarNumero(a) || !validarNumero(b)) {
        return "Error: argumentos no válidos";
    }

    if (b === 0) {
        return "Error: no se puede dividir entre cero";
    }

    return a / b;
}

function average(numeros) {

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: array no válido";
    }

    let suma = 0;

    for (const numero of numeros) {

        if (!validarNumero(numero)) {
            return "Error: el array contiene valores no válidos";
        }

        suma += numero;
    }

    return suma / numeros.length;
}

function max(numeros) {

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: array no válido";
    }

    let mayor = numeros[0];

    for (const numero of numeros) {

        if (!validarNumero(numero)) {
            return "Error: el array contiene valores no válidos";
        }

        if (numero > mayor) {
            mayor = numero;
        }
    }

    return mayor;
}

function min(numeros) {

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: array no válido";
    }

    let menor = numeros[0];

    for (const numero of numeros) {

        if (!validarNumero(numero)) {
            return "Error: el array contiene valores no válidos";
        }

        if (numero < menor) {
            menor = numero;
        }
    }

    return menor;
}


const numeros = [10, 20, 30, 40];

const resultados = [
    "add(10, 5) = " + add(10, 5),
    "subtract(10, 5) = " + subtract(10, 5),
    "multiply(10, 5) = " + multiply(10, 5),
    "divide(10, 5) = " + divide(10, 5),
    "average([10, 20, 30, 40]) = " + average(numeros),
    "max([10, 20, 30, 40]) = " + max(numeros),
    "min([10, 20, 30, 40]) = " + min(numeros),
    "divide(10, 0) = " + divide(10, 0)
];

const listaResultados =
    document.getElementById("resultados");

for (const resultado of resultados) {

    const elemento =
        document.createElement("li");

    elemento.textContent = resultado;

    listaResultados.appendChild(elemento);
}