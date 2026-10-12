const productos = [
    {
        id: 1,
        name: "Portátil",
        price: 899
    },
    {
        id: 2,
        name: "Teclado",
        price: 45
    },
    {
        id: 3,
        name: "Ratón",
        price: 25
    },
    {
        id: 4,
        name: "Auriculares",
        price: 79
    }
];


let carrito = cargarCarrito();


function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}


function cargarCarrito() {

    const carritoGuardado =
        localStorage.getItem("carrito");

    if (carritoGuardado === null) {
        return [];
    }

    return JSON.parse(carritoGuardado);
}


function mostrarProductos() {

    const contenedor =
        document.getElementById("productos");

    contenedor.innerHTML = "";

    for (const producto of productos) {

        const tarjeta =
            document.createElement("div");

        tarjeta.className = "producto";


        const nombre =
            document.createElement("h3");

        nombre.textContent =
            producto.name;


        const precio =
            document.createElement("p");

        precio.textContent =
            "Precio: " +
            producto.price +
            " €";


        const boton =
            document.createElement("button");

        boton.textContent =
            "Añadir al carrito";


        boton.addEventListener(
            "click",
            function () {

                añadirProducto(
                    producto.id
                );
            }
        );


        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    }
}


function añadirProducto(id) {

    let encontrado = false;

    for (const productoCarrito of carrito) {

        if (productoCarrito.id === id) {

            productoCarrito.quantity++;

            encontrado = true;

            break;
        }
    }


    if (!encontrado) {

        for (const producto of productos) {

            if (producto.id === id) {

                carrito.push({
                    id: producto.id,
                    name: producto.name,
                    price: producto.price,
                    quantity: 1
                });

                break;
            }
        }
    }

    guardarCarrito();

    mostrarCarrito();
}


function eliminarProducto(id) {

    const nuevoCarrito = [];

    for (const producto of carrito) {

        if (producto.id !== id) {

            nuevoCarrito.push(
                producto
            );
        }
    }

    carrito = nuevoCarrito;

    guardarCarrito();

    mostrarCarrito();
}


function cambiarCantidad(id, cambio) {

    for (const producto of carrito) {

        if (producto.id === id) {

            producto.quantity += cambio;

            if (producto.quantity <= 0) {

                eliminarProducto(id);

                return;
            }

            break;
        }
    }

    guardarCarrito();

    mostrarCarrito();
}


function calcularCantidadTotal() {

    let cantidad = 0;

    for (const producto of carrito) {

        cantidad +=
            producto.quantity;
    }

    return cantidad;
}


function calcularPrecioTotal() {

    let total = 0;

    for (const producto of carrito) {

        total +=
            producto.price *
            producto.quantity;
    }

    return total;
}


function mostrarCarrito() {

    const contenedor =
        document.getElementById("carrito");

    contenedor.innerHTML = "";


    if (carrito.length === 0) {

        const mensaje =
            document.createElement("p");

        mensaje.textContent =
            "El carrito está vacío.";

        contenedor.appendChild(
            mensaje
        );
    }


    for (const producto of carrito) {

        const elemento =
            document.createElement("div");

        elemento.className =
            "producto-carrito";


        const informacion =
            document.createElement("p");

        informacion.textContent =
            producto.name +
            " | " +
            producto.price +
            " € | Cantidad: " +
            producto.quantity;


        const botonMenos =
            document.createElement("button");

        botonMenos.textContent = "-";

        botonMenos.addEventListener(
            "click",
            function () {

                cambiarCantidad(
                    producto.id,
                    -1
                );
            }
        );


        const botonMas =
            document.createElement("button");

        botonMas.textContent = "+";

        botonMas.addEventListener(
            "click",
            function () {

                cambiarCantidad(
                    producto.id,
                    1
                );
            }
        );


        const botonEliminar =
            document.createElement("button");

        botonEliminar.textContent =
            "Eliminar";

        botonEliminar.addEventListener(
            "click",
            function () {

                eliminarProducto(
                    producto.id
                );
            }
        );


        elemento.appendChild(
            informacion
        );

        elemento.appendChild(
            botonMenos
        );

        elemento.appendChild(
            botonMas
        );

        elemento.appendChild(
            botonEliminar
        );


        contenedor.appendChild(
            elemento
        );
    }


    document
        .getElementById(
            "cantidad-total"
        )
        .textContent =
            "Cantidad total de productos: " +
            calcularCantidadTotal();


    document
        .getElementById(
            "precio-total"
        )
        .textContent =
            "Precio total: " +
            calcularPrecioTotal() +
            " €";
}


document
    .getElementById(
        "vaciar-carrito"
    )
    .addEventListener(
        "click",
        function () {

            carrito = [];

            guardarCarrito();

            mostrarCarrito();
        }
    );


mostrarProductos();

mostrarCarrito();