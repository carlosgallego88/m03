let productos = [
    {
        name: "Portátil",
        price: 899,
        category: "Tecnología",
        available: true
    },
    {
        name: "Teclado",
        price: 45,
        category: "Tecnología",
        available: true
    },
    {
        name: "Ratón",
        price: 25,
        category: "Tecnología",
        available: false
    }
];


function mostrarTabla() {

    const tbody =
        document.getElementById("tabla-productos");

    tbody.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {

        const producto = productos[i];

        const fila =
            document.createElement("tr");

        const celdaNombre =
            document.createElement("td");

        celdaNombre.textContent =
            producto.name;


        const celdaPrecio =
            document.createElement("td");

        celdaPrecio.textContent =
            producto.price + " €";


        const celdaCategoria =
            document.createElement("td");

        celdaCategoria.textContent =
            producto.category;


        const celdaDisponible =
            document.createElement("td");

        celdaDisponible.textContent =
            producto.available ? "Sí" : "No";


        const celdaAcciones =
            document.createElement("td");


        const botonEditar =
            document.createElement("button");

        botonEditar.textContent = "Editar";

        botonEditar.addEventListener(
            "click",
            function () {
                editarProducto(i);
            }
        );


        const botonEliminar =
            document.createElement("button");

        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener(
            "click",
            function () {
                eliminarProducto(i);
            }
        );


        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(botonEliminar);


        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaCategoria);
        fila.appendChild(celdaDisponible);
        fila.appendChild(celdaAcciones);

        tbody.appendChild(fila);
    }
}


function eliminarProducto(indice) {

    productos.splice(indice, 1);

    mostrarTabla();
}


function editarProducto(indice) {

    const producto = productos[indice];

    const nuevoNombre =
        prompt(
            "Nuevo nombre:",
            producto.name
        );

    if (
        nuevoNombre !== null &&
        nuevoNombre.trim() !== ""
    ) {
        producto.name =
            nuevoNombre.trim();
    }


    const nuevoPrecio =
        prompt(
            "Nuevo precio:",
            producto.price
        );

    if (
        nuevoPrecio !== null &&
        nuevoPrecio !== ""
    ) {

        const precioConvertido =
            Number(nuevoPrecio);

        if (
            !Number.isNaN(precioConvertido) &&
            precioConvertido >= 0
        ) {
            producto.price =
                precioConvertido;
        }
    }


    const nuevaCategoria =
        prompt(
            "Nueva categoría:",
            producto.category
        );

    if (
        nuevaCategoria !== null &&
        nuevaCategoria.trim() !== ""
    ) {
        producto.category =
            nuevaCategoria.trim();
    }


    const nuevaDisponibilidad =
        confirm(
            "Pulsa Aceptar si el producto está disponible.\n" +
            "Pulsa Cancelar si no está disponible."
        );

    producto.available =
        nuevaDisponibilidad;

    mostrarTabla();
}


const formulario =
    document.getElementById(
        "formulario-producto"
    );


formulario.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();

        const nombre =
            document.getElementById(
                "nombre"
            ).value.trim();

        const precio =
            Number(
                document.getElementById(
                    "precio"
                ).value
            );

        const categoria =
            document.getElementById(
                "categoria"
            ).value.trim();

        const disponible =
            document.getElementById(
                "disponible"
            ).value === "true";


        const nuevoProducto = {
            name: nombre,
            price: precio,
            category: categoria,
            available: disponible
        };


        productos.push(
            nuevoProducto
        );


        formulario.reset();

        mostrarTabla();
    }
);


mostrarTabla();