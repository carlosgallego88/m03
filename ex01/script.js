const nombre = "Carlos Gallego";
const edad = 21;
const matriculado = true;

const asignaturas = [
    "Programación Web",
    "Bases de Datos",
    "Modelos de Computación"
];

const estudiante = {
    nombre: nombre,
    edad: edad,
    matriculado: matriculado,
    asignaturas: asignaturas
};

document.getElementById("nombre").textContent =
    "Nombre: " + nombre;

document.getElementById("edad").textContent =
    "Edad: " + edad;

document.getElementById("matriculado").textContent =
    "Matriculado: " + matriculado;

const listaAsignaturas =
    document.getElementById("asignaturas");

for (const asignatura of asignaturas) {

    const elemento =
        document.createElement("li");

    elemento.textContent = asignatura;

    listaAsignaturas.appendChild(elemento);
}

const datosEstudiante =
    document.getElementById("datos-estudiante");

datosEstudiante.innerHTML =
    "<p><strong>Nombre:</strong> " +
    estudiante.nombre +
    "</p>" +
    "<p><strong>Edad:</strong> " +
    estudiante.edad +
    "</p>" +
    "<p><strong>Matriculado:</strong> " +
    estudiante.matriculado +
    "</p>";