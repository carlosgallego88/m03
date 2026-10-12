let textoContador = "";

for (let i = 1; i <= 10; i++) {
    textoContador += i + " ";
}

document.getElementById("contador").textContent =
    textoContador;


let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i;
}

document.getElementById("suma").textContent =
    "Suma del 1 al 10: " + suma;


const numeros = [4, 12, 7, 25, 9, 18];

let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }

}

document.getElementById("maximo").textContent =
    "El número máximo es: " + maximo;


const listaTabla =
    document.getElementById("tabla");

for (let i = 1; i <= 10; i++) {

    const elemento =
        document.createElement("li");

    elemento.textContent =
        "5 x " + i + " = " + (5 * i);

    listaTabla.appendChild(elemento);
}


let numero = 1;
let textoWhile = "";

while (numero <= 5) {

    textoWhile += numero + " ";

    numero++;
}

document.getElementById("while").textContent =
    textoWhile;


const lenguajes = [
    "HTML",
    "CSS",
    "JavaScript"
];

let textoForOf = "";

for (const lenguaje of lenguajes) {

    textoForOf += lenguaje + " ";

}

document.getElementById("forof").textContent =
    textoForOf;