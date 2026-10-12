const productos = [
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
    },
    {
        name: "Mochila",
        price: 40,
        category: "Accesorios",
        available: true
    },
    {
        name: "Auriculares",
        price: 79,
        category: "Tecnología",
        available: true
    }
];


function mostrarProductos(lista) {

    const contenedor =
        document.getElementById("lista-productos");

    contenedor.innerHTML = "";

    for (const producto of lista) {

        const elemento =
            document.createElement("li");

        elemento.textContent =
            producto.name +
            " | Precio: " +
            producto.price +
            " € | Categoría: " +
            producto.category +
            " | Disponible: " +
            producto.available;

        contenedor.appendChild(elemento);
    }
}


function buscarProducto(nombre) {

    for (const producto of productos) {

        if (
            producto.name.toLowerCase() ===
            nombre.toLowerCase()
        ) {
            return producto;
        }
    }

    return null;
}


function filtrarDisponibles() {

    const resultado = [];

    for (const producto of productos) {

        if (producto.available === true) {
            resultado.push(producto);
        }
    }

    return resultado;
}


function filtrarCategoria(categoria) {

    const resultado = [];

    for (const producto of productos) {

        if (
            producto.category.toLowerCase() ===
            categoria.toLowerCase()
        ) {
            resultado.push(producto);
        }
    }

    return resultado;
}


function ordenarPorPrecio(lista) {

    const copia = [];

    for (const producto of lista) {
        copia.push(producto);
    }

    for (let i = 0; i < copia.length - 1; i++) {

        for (let j = 0; j < copia.length - 1 - i; j++) {

            if (copia[j].price > copia[j + 1].price) {

                const temporal = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = temporal;
            }
        }
    }

    return copia;
}


document
    .getElementById("buscar")
    .addEventListener("click", function () {

        const nombre =
            document.getElementById("busqueda").value;

        const producto =
            buscarProducto(nombre);

        const salida =
            document.getElementById("resultado-busqueda");

        if (producto === null) {

            salida.textContent =
                "Producto no encontrado.";

        }
        else {

            salida.textContent =
                producto.name +
                " - " +
                producto.price +
                " € - " +
                producto.category;
        }

    });


document
    .getElementById("disponibles")
    .addEventListener("click", function () {

        mostrarProductos(
            filtrarDisponibles()
        );

    });


document
    .getElementById("tecnologia")
    .addEventListener("click", function () {

        mostrarProductos(
            filtrarCategoria("Tecnología")
        );

    });


document
    .getElementById("orden-precio")
    .addEventListener("click", function () {

        mostrarProductos(
            ordenarPorPrecio(productos)
        );

    });


mostrarProductos(productos);