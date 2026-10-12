function miMap(array, funcion) {

    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i], i));
    }

    return resultado;
}


function miFilter(array, funcion) {

    const resultado = [];

    for (let i = 0; i < array.length; i++) {

        if (funcion(array[i], i)) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}


function miFind(array, funcion) {

    for (let i = 0; i < array.length; i++) {

        if (funcion(array[i], i)) {
            return array[i];
        }
    }

    return undefined;
}


function miReduce(array, funcion, valorInicial) {

    let acumulador = valorInicial;

    for (let i = 0; i < array.length; i++) {
        acumulador =
            funcion(acumulador, array[i]);
    }

    return acumulador;
}


function miIncludes(array, valorBuscado) {

    for (const elemento of array) {

        if (elemento === valorBuscado) {
            return true;
        }
    }

    return false;
}


function miReverse(array) {

    const resultado = [];

    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }

    return resultado;
}


const numeros = [1, 2, 3, 4, 5];

document.getElementById("original").textContent =
    numeros.join(", ");


const duplicados =
    miMap(numeros, function (numero) {
        return numero * 2;
    });


const pares =
    miFilter(numeros, function (numero) {
        return numero % 2 === 0;
    });


const encontrado =
    miFind(numeros, function (numero) {
        return numero > 3;
    });


const suma =
    miReduce(
        numeros,
        function (acumulador, numero) {
            return acumulador + numero;
        },
        0
    );


const contieneTres =
    miIncludes(numeros, 3);


const invertido =
    miReverse(numeros);


const resultados = [
    "Map - números duplicados: " + duplicados.join(", "),
    "Filter - números pares: " + pares.join(", "),
    "Find - primer número mayor que 3: " + encontrado,
    "Reduce - suma total: " + suma,
    "Includes - ¿contiene el número 3?: " + contieneTres,
    "Reverse - array invertido: " + invertido.join(", ")
];


const lista =
    document.getElementById("resultados");

for (const resultado of resultados) {

    const elemento =
        document.createElement("li");

    elemento.textContent = resultado;

    lista.appendChild(elemento);
}