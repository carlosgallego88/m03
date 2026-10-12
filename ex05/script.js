const numeros = [
    10,
    -5,
    7,
    0,
    18,
    -12,
    3,
    22,
    -1
];

let positivos = 0;
let negativos = 0;
let pares = 0;
let impares = 0;

let mayor = numeros[0];
let menor = numeros[0];

let suma = 0;

for (const numero of numeros) {

    if (numero > 0) {
        positivos++;
    }

    if (numero < 0) {
        negativos++;
    }

    if (numero % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }

    if (numero > mayor) {
        mayor = numero;
    }

    if (numero < menor) {
        menor = numero;
    }

    suma += numero;
}

const media = suma / numeros.length;

/* Bonus */
let cantidadCeros = 0;

for (const numero of numeros) {

    if (numero === 0) {
        cantidadCeros++;
    }
}

document.getElementById("numeros").textContent =
    numeros.join(", ");

const resultados = [
    "Cantidad de positivos: " + positivos,
    "Cantidad de negativos: " + negativos,
    "Cantidad de pares: " + pares,
    "Cantidad de impares: " + impares,
    "Número mayor: " + mayor,
    "Número menor: " + menor,
    "Media: " + media.toFixed(2),
    "Cantidad de ceros: " + cantidadCeros,
    "Cantidad total de números: " + numeros.length
];

const listaResultados =
    document.getElementById("resultados");

for (const resultado of resultados) {

    const elemento =
        document.createElement("li");

    elemento.textContent = resultado;

    listaResultados.appendChild(elemento);
}