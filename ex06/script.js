function contarCaracteres(texto) {
    return texto.length;
}

function invertirTexto(texto) {

    let invertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    return invertido;
}

function contarPalabras(texto) {

    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return 0;
    }

    return textoLimpio.split(/\s+/).length;
}

function buscarPalabra(texto, palabra) {

    const textoNormalizado = texto.toLowerCase();
    const palabraNormalizada = palabra.toLowerCase();

    return textoNormalizado.includes(palabraNormalizada);
}

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .replaceAll(" ", "");
}

function esPalindromo(texto) {

    const textoNormalizado =
        normalizarTexto(texto);

    const textoInvertido =
        invertirTexto(textoNormalizado);

    return textoNormalizado === textoInvertido;
}


const boton =
    document.getElementById("analizar");

boton.addEventListener("click", function () {

    const texto =
        document.getElementById("texto").value;

    const palabra =
        document.getElementById("palabra").value;

    const resultados = [
        "Número de caracteres: " + contarCaracteres(texto),
        "Texto invertido: " + invertirTexto(texto),
        "Número de palabras: " + contarPalabras(texto),
        "¿Contiene la palabra '" + palabra + "'?: " +
            buscarPalabra(texto, palabra),
        "¿Es palíndromo?: " + esPalindromo(texto),
        "Texto normalizado: " + normalizarTexto(texto)
    ];

    const lista =
        document.getElementById("resultados");

    lista.innerHTML = "";

    for (const resultado of resultados) {

        const elemento =
            document.createElement("li");

        elemento.textContent = resultado;

        lista.appendChild(elemento);
    }

});