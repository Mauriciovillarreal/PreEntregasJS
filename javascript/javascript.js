let productos = [
    {
        id: 51201,
        nombre: "Cherry Quick",
        categoria: "Ceras Liquidas",
        stock: 1,
        precio: 1620,
        descripción: "600ml + Gatillo. Quick Detail con aroma a cereza, formulado para otorgar un brillo único. Puede ser utilizado en superficies húmedas y secas. También sirve para remover polvillo y marcas de pintura."
    },
    {
        id: 51202,
        nombre: "Extreme Detail",
        categoria: "Ceras Liquidas",
        stock: 3,
        precio: 1680,
        descripción: "600ml + Gatillo. Quick Detail con aroma a durazno, formulado para otorgar un brillo único. Puede ser utilizado en superficies húmedas y secas. También sirve para remover polvillo y marcas de pintura."
    },
    {
        id: 51203,
        nombre: "Waterless",
        categoria: "Ceras Liquidas",
        stock: 6,
        precio: 1580,
        descripción: "600ml + Gatillo. Limpiador en seco formulado para suspender la suciedad del vehículo y poder realizar una limpieza sin necesidad de utilizar agua. Contiene agentes lubricantes y ceras."
    },
    {
        id: 51204,
        nombre: "Lava Crush",
        categoria: "Ceras Liquidas",
        stock: 2,
        precio: 2680,
        descripción: "600ml + Gatillo. Sellador diseñado para proteger la pintura del vehículo. Formula de polímeros siliconados y resinas que aseguran brillo, repelencia del agua y suavidad al tacto."
    },
    {
        id: 1707,
        nombre: "NTP",
        categoria: "exteriores",
        stock: 4,
        precio: 5980,
        descripción: "600ml. Restaura y reacondiciona plásticos y gomas del exterior dejando una terminación satinada. No daña ni deteriora la superficie. Posee pigmentos negros con aroma a café."
    },
    {
        id: 1708,
        nombre: "Blue Magic",
        categoria: "exteriores",
        stock: 1,
        precio: 6820,
        descripción: "600ml. Acondicionador de exterior a base de siliconas. Brinda un excepcional rendimiento y fácil de usar. Otorga una terminación brillante y restauradora."
    },
    {
        id: 1709,
        nombre: "Hits Nones",
        categoria: "exteriores",
        stock: 1,
        precio: 2160,
        descripción: "600ml + Gatillo. Protector de pasa ruedas y chasis, muy sencillo de utilizar. Restaura el color de la superficie y brinda protección contra el agua y el paso del tiempo. Fragancia a uva."
    },
    {
        id: 75201,
        nombre: "All Clean",
        categoria: "limpieadores",
        stock: 7,
        precio: 1660,
        descripción: "600ml + Gatillo. Limpiador multipropósito, posee un sistema de suspensión de suciedad con gran poder espumógeno."
    },
    {
        id: 75202,
        nombre: "Inferno Gel",
        categoria: "limpieadores",
        stock: 4,
        precio: 2060,
        descripción: "600ml + Gatillo. APC Premium desarrollado para los más exigentes detailers del mercado. Posee un sistema de suspensión de suciedad y gran poder espumógeno con agradable fragancia a rosas."
    },
    {
        id: 75203,
        nombre: "Formule Conquest",
        categoria: "limpieadores",
        stock: 4,
        precio: 1980,
        descripción: "600ml + Gatillo. Desengrasante con gran poder de limpieza, desarrollado para ser aplicado en llantas y motores. Fórmula concentrada, para usarlo es necesario diluirlo en agua."
    },
    {
        id: 75204,
        nombre: "Iron Warning",
        categoria: "limpieadores",
        stock: 10,
        precio: 4100,
        descripción: "600ml + Gatillo. Descontaminante férrico de llantas el cual actúa eficazmente sobre el polvo de las pastillas de freno. Posee un gran poder de limpieza. Fórmula no diluible, listo para usar."
    },
]

principal(productos)

function principal(productos) {
    let carrito = []

    alert("Bienvenido a Toxic Cleaning \nVentas de productos para limpieza de autos")
    do {
        opcion = Number(prompt("Ingrese opcion\n1 - Para ver productos por categoría\n2 - Finalizar compra \n0 - Salir"))
        switch (opcion) {
            case 1:
                categoriaCarrito(productos, carrito)
                break
            case 2:
                finalizarCompra(carrito)
                break
            default:
                break
        }
    } while (opcion != 0)
    alert("Gracias por elegirnos by Toxic Cleaning")
}

function listarDetalle(carrito) {
    let lista = ""
    carrito.forEach(carrito => lista += "Producto: " + carrito.nombre + " | Unidades: " + carrito.unidades + " | Total: $" + carrito.subtotal + "\n")
    return lista
}

function listar(productoBuscado) {
    let lista = ""
    productoBuscado.forEach(producto => lista += "Id " + producto.id + " - " + producto.nombre + "\n")
    return lista
}

function categoriaCarrito(productos, carrito) {
    let categoria = Number(prompt("Catálogo\nIngrese categoria\n1 - Ceras Liquidas\n2 - Exteriores\n3 - Limpiadores "))
    if (categoria == 1) {
        categoria = "Ceras Liquidas"
    }
    else if (categoria == 2) {
        categoria = "exteriores"
    }
    else if (categoria == 3) {
        categoria = "limpieadores"
    }
    let categoriaElegida = productos.filter(producto => (producto.categoria === categoria))
    let productoId = Number(prompt("Ingrese id de prodcuto para ver en detalle\n" + listar(categoriaElegida)))
    if (productoId = productos.find(producto => producto.id === productoId)) {
        alert("Nombre:\n" + productoId.nombre + "\n" + "Descripción:\n" + productoId.descripción + "\n" + "Precio:\n$" + productoId.precio)
    }
    let opcionFinal = prompt("Ingresar " + productoId.nombre + " al carrito? si o no")
    if (opcionFinal === "si") {
        let productoEnCarrito = carrito.find(producto => producto.id === productoId.id)
        if (productoId.stock > 0) {
            if (productoEnCarrito) {
                productoEnCarrito.unidades++
                productoEnCarrito.subtotal = productoEnCarrito.unidades * productoEnCarrito.precioUnitario
            } else {
                carrito.push({
                    id: productoId.id,
                    nombre: productoId.nombre,
                    precioUnitario: productoId.precio,
                    unidades: 1,
                    subtotal: productoId.precio
                })
            }
            productoId.stock--
            alert("Se agregó " + productoId.nombre + " al carrito")
        } else {
            alert("No hay más stock del producto seleccionado")
        }
        console.log(carrito)
    }
}

function finalizarCompra(carrito) {
    if (carrito.length === 0) {
        alert("Primero debe agregar productos al carrito")
    } else {
        let total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
        let carritoDetalle = carrito.filter(carrito => carrito.nombre)
        alert("Detalle de compra\n" + listarDetalle(carritoDetalle) + "Total a pagar $" + total)

        let cuota = Number(prompt("Ingrese cantidad de cuotas\n3 cuotas sin interés de $" + Math.floor(total / 3) + "\n6 cuotas de $" + Math.floor((total * (9 / 100) + total) / 6) + " con 9% de interés" + "\n12 cuotas de $" + Math.floor((total * (18 / 100) + total) / 12) + " con 18% de interés"
        ))
        if (cuota == 3) {
            alert("Detalle de compra\n" + listarDetalle(carritoDetalle) + "\nTotal a pagar $" + total + " en 3 cuotas de $" + Math.floor(total / 3) + "\nGracias por su compra")
        }
        else if (cuota == 6) {
            alert("Detalle de compra\n" + listarDetalle(carritoDetalle) + "\nTotal a pagar con 9% de interés $" + Math.floor((total * (9 / 100) + total)) + " en 6 cuotas de $" + Math.floor((total * (9 / 100) + total) / 6) + "\nGracias por su compra")
        }
        if (cuota == 12) {
            alert("Detalle de compra\n" + listarDetalle(carritoDetalle) + "\nTotal a pagar con 18% de interés $" + Math.floor((total * (18 / 100) + total)) + " en 12 cuotas de $" + Math.floor((total * (18 / 100) + total) / 12) + "\nGracias por su compra")
        }
        opcion = 0
    }
}