let productos = [
  {
    id: 51201,
    nombre: "Cherry Quick",
    categoria: "Ceras Liquidas",
    stock: 1,
    precio: 1620,
    descripción: "600ml + Gatillo. Quick Detail con aroma a cereza, formulado para otorgar un brillo único. Puede ser utilizado en superficies húmedas y secas. También sirve para remover polvillo y marcas de pintura.",
    rutaImagen: "cherryquick.jpg"
  },
  {
    id: 51202,
    nombre: "Extreme Detail",
    categoria: "Ceras Liquidas",
    stock: 3,
    precio: 1680,
    descripción: "600ml + Gatillo. Quick Detail con aroma a durazno, formulado para otorgar un brillo único. Puede ser utilizado en superficies húmedas y secas. También sirve para remover polvillo y marcas de pintura.",
    rutaImagen: "extremedetail.jpg"
  },
  {
    id: 51203,
    nombre: "Waterless",
    categoria: "Ceras Liquidas",
    stock: 6,
    precio: 1580,
    descripción: "600ml + Gatillo. Limpiador en seco formulado para suspender la suciedad del vehículo y poder realizar una limpieza sin necesidad de utilizar agua. Contiene agentes lubricantes y ceras.",
    rutaImagen: "waterless.jpg"
  },
  {
    id: 51204,
    nombre: "Lava Crush",
    categoria: "Ceras Liquidas",
    stock: 2,
    precio: 2680,
    descripción: "600ml + Gatillo. Sellador diseñado para proteger la pintura del vehículo. Formula de polímeros siliconados y resinas que aseguran brillo, repelencia del agua y suavidad al tacto.",
    rutaImagen: "lavacrush.jpg"
  },
  {
    id: 1707,
    nombre: "NTP",
    categoria: "Exteriores",
    stock: 4,
    precio: 5980,
    descripción: "600ml. Restaura y reacondiciona plásticos y gomas del exterior dejando una terminación satinada. No daña ni deteriora la superficie. Posee pigmentos negros con aroma a café.",
    rutaImagen: "ntp.jpg"
  },
  {
    id: 1708,
    nombre: "Blue Magic",
    categoria: "Exteriores",
    stock: 1,
    precio: 6820,
    descripción: "600ml. Acondicionador de exterior a base de siliconas. Brinda un excepcional rendimiento y fácil de usar. Otorga una terminación brillante y restauradora.",
    rutaImagen: "bluemagic.jpg"
  },
  {
    id: 1709,
    nombre: "Hits Bones",
    categoria: "Exteriores",
    stock: 1,
    precio: 2160,
    descripción: "600ml + Gatillo. Protector de pasa ruedas y chasis, muy sencillo de utilizar. Restaura el color de la superficie y brinda protección contra el agua y el paso del tiempo. Fragancia a uva.",
    rutaImagen: "hitsbones.jpg"
  },
  {
    id: 1709,
    nombre: "Gel Shine",
    categoria: "Exteriores",
    stock: 1,
    precio: 1960,
    descripción: "600ml. Acondicionador de cubiertas por excelencia. Producto elaborado a base de silicona de alta duración y rendimiento que otorga una terminación brillante en la superficie.",
    rutaImagen: "gelshine.png"
  },
  {
    id: 75201,
    nombre: "All Clean",
    categoria: "Limpiadores",
    stock: 7,
    precio: 1660,
    descripción: "600ml + Gatillo. Limpiador multipropósito, posee un sistema de suspensión de suciedad con gran poder espumógeno.",
    rutaImagen: "allclean.jpg"
  },
  {
    id: 75202,
    nombre: "Inferno Gel",
    categoria: "Limpiadores",
    stock: 4,
    precio: 2060,
    descripción: "600ml + Gatillo. APC Premium desarrollado para los más exigentes detailers del mercado. Posee un sistema de suspensión de suciedad y gran poder espumógeno con agradable fragancia a rosas.",
    rutaImagen: "infernogel.jpg"
  },
  {
    id: 75203,
    nombre: "Formule Conquest",
    categoria: "Limpiadores",
    stock: 4,
    precio: 1980,
    descripción: "600ml + Gatillo. Desengrasante con gran poder de limpieza, desarrollado para ser aplicado en llantas y motores. Fórmula concentrada, para usarlo es necesario diluirlo en agua.",
    rutaImagen: "formuleconquest.jpg"
  },
  {
    id: 75204,
    nombre: "Iron Warning",
    categoria: "Limpiadores",
    stock: 10,
    precio: 4100,
    descripción: "600ml + Gatillo. Descontaminante férrico de llantas el cual actúa eficazmente sobre el polvo de las pastillas de freno. Posee un gran poder de limpieza. Fórmula no diluible, listo para usar.",
    rutaImagen: "ironwarning.jpg"
  },
  {
    id: 561,
    nombre: "Party Summer",
    categoria: "Perfumes",
    stock: 3,
    precio: 1100,
    descripción: "120ml. Fragancias a base de alcohol.",
    rutaImagen: "partysummer.png"
  },
  {
    id: 562,
    nombre: "New Car",
    categoria: "Perfumes",
    stock: 3,
    precio: 1100,
    descripción: "120ml. Fragancias a base de alcohol.",
    rutaImagen: "newcar.png"
  },
  {
    id: 563,
    nombre: "Party Summer",
    categoria: "Perfumes",
    stock: 3,
    precio: 1100,
    descripción: "120ml. Fragancias a base de alcohol.",
    rutaImagen: "ironwarning.jpg"
  },
  {
    id: 564,
    nombre: "Party Summer",
    categoria: "Perfumes",
    stock: 3,
    precio: 1100,
    descripción: "120ml. Fragancias a base de alcohol.",
    rutaImagen: "ironwarning.jpg"
  },
]
let carrito = []
let carritoRecuperado = localStorage.getItem("carrito")
if (carritoRecuperado) {
  carrito = JSON.parse(carritoRecuperado)
}

renderizarCarrito(carrito)
renderizarProductos(productos, carrito)

let buscador = document.getElementById("buscador")
buscador.addEventListener('input', () => filtrarYRenderizar(productos));

function filtrarYRenderizar(productos) {
  let productosFiltrados = productos.filter(producto => (producto.nombre.toLowerCase()).includes(buscador.value))
  renderizarProductos(productosFiltrados)
}

let navbar = document.getElementById("navBar")
navbar.className = "navbar__me---desktop"
navbar.innerHTML = `
  <nav class="navbar__me---desktop" id="buscador">
  <h1>TOXIC <span>Cleaning</span></h1>
  <div class="filtrar"> 
  <p>Ver productos por categoria</p>
    <button class="filtroCategoria" id="Ceras Liquidas">Cesras liquidas</button>
    <button class="filtroCategoria" id="Limpiadores">Limpiadores</button>
    <button class="filtroCategoria" id="Perfumes">Pefumes</button>
    <button class="filtroCategoria" id="Exteriores">Exteriores</button>
  </div>
  </nav>
  `

function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedorProductos")
  contenedor.innerHTML = ""
  productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
    <div class="h2">${producto.nombre}</div>
    <div class="h6">${producto.categoria}<div>
    <img class=imagenProducto src=./img/${producto.rutaImagen} />
    <hr>
    <p class="h6 text-start">${producto.descripción}</p>
    <div class="h5 text-start">$${producto.precio}</div>
    <button  class="button" id=${producto.id}>
    <img src="./img/anadir-al-carrito.png" width="20px">
    </button>
    `

    contenedor.appendChild(tarjeta)

    let botonAgregarAlCarrito = document.getElementById(producto.id)
    botonAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(productos, carrito, e))
  })
}

function agregarProductoAlCarrito(productos, carrito, e) {
  let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
  let productoEnCarrito = carrito.find(producto => producto.id === productoBuscado.id)

  if (productoBuscado.stock > 0) {
    if (productoEnCarrito) {
      productoEnCarrito.unidades++
      productoEnCarrito.subtotal = productoEnCarrito.unidades * productoEnCarrito.precioUnitario
      alert("hola1 " + productoEnCarrito.unidades)
    } else {
      carrito.push({
        rutaImagen: productoBuscado.rutaImagen,
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
      })
      alert("hola")
    }
    productoBuscado.stock--
    localStorage.setItem("carrito", JSON.stringify(carrito))
  } else {
    alert("No hay más stock del producto seleccionado")
  }

  renderizarCarrito(carrito)
}


let total = 0;
function renderizarCarrito(productosEnCarrito) {
  let divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML = `<div class="h4">CARRITO DE COMPRA</div>`
    
  if (productosEnCarrito.length > 0) {

   

    let total = 0;

    productosEnCarrito.forEach(producto => {
      let tarjProdCarrito = document.createElement("div")

      tarjProdCarrito.innerHTML = `

        <div class="tarjProdCarrito"> 
        <img src=./img/${producto.rutaImagen} width="50px"/>
        <div>
        <div class="h5">${producto.nombre}</div>
        <div>$${producto.subtotal}</div>
        <div>Unidades ${producto.unidades}</div>
        </div>
    
      
      </div>
      `
      total += producto.subtotal
      divCarrito.appendChild(tarjProdCarrito)
      
    })

    let divSubTotal = document.createElement("div")
    
    divSubTotal.innerHTML = `
    <div class="pagar">
      <div class="h5">TOTAL A PAGAR</div>
      <div>$${total}</div>
    </div>
    
    `
    divCarrito.appendChild(divSubTotal)

    let boton = document.createElement("button")
    boton.className = "btnCompra"
    boton.innerHTML = "Finalizar compra"
    boton.addEventListener("click", finalizarCompra)

    divCarrito.appendChild(boton)
  }
}


function finalizarCompra() {
  let carrito = document.getElementById("carrito")
  carrito.innerHTML = ""
  localStorage.removeItem("carrito")
  
}

let botonVerOcultar = document.getElementById("verOcultar")
botonVerOcultar.addEventListener("click", verOcultarCarrito)

function verOcultarCarrito() {
  let carrito = document.getElementById("carrito")
  let contenedorProductos = document.getElementById("contenedorCarrito")

  carrito.classList.toggle("oculta")
  contenedorProductos.classList.toggle("oculta")
}

let botonesCategorias = document.getElementsByClassName("filtroCategoria")
for (const botonCategoria of botonesCategorias) {
  botonCategoria.addEventListener("click", (e) => filtrarPorCategoria(e, productos))
}
function filtrarPorCategoria(e, productos) {
  console.log(e)
  let productosFiltrados = productos.filter(producto => {
    return producto.categoria === e.target.id
  })
  renderizarProductos(productosFiltrados)
}

/* let nombre = "Juan"
localStorage.setItem("nombre", nombre)
localStorage.setItem("tieneMascotas", true)
localStorage.setItem("edad", 20)
localStorage.setItem("nombre", "Maria")

let tieneMascotas = Boolean(localStorage.getItem("tieneMascotas"))
let edad = Number(localStorage.getItem("edad"))

console.log(tieneMascotas)
console.log(edad)

console.log(localStorage.length)

console.log(localStorage.key(0))
let valor = localStorage.getItem("tieneMascotas")
// let valor = localStorage.getItem(localStorage.key(0))
console.log(valor)

for (let i = 0; i < localStorage.length; i++) {
  let nombreClave = localStorage.key(i)
  let valor = localStorage.getItem(nombreClave)
  console.log(valor)
}

localStorage.setItem("carrito", [{}, {}, {}])
localStorage.removeItem("carrito")

localStorage.clear() */

/* // de JS a JSON stringify => string
// de JSON a JS parse => tipo de dato original obj o arr
let objetoJS = { nombre: "Juan", apellido : "Perez", edad: 20 } // object
let objetoJSON = '{"nombre":"Juan","apellido":"Perez","edad":20}' // string
let objetoJSON2 = JSON.stringify(objetoJS)
console.log(objetoJSON)
console.log(objetoJSON2)

// almacenar objeto previamente convertido a string (notación JSON)
localStorage.setItem("pruebaObj", objetoJSON2)

// recuperar objeto JS almacenado como string en el storage
let stringRecuperado = localStorage.getItem("pruebaObj")
console.log(stringRecuperado)
let objetoJSRecuperado = JSON.parse(stringRecuperado)
console.log(objetoJSRecuperado)
console.log(objetoJSRecuperado.apellido)

let algoQueNoExiste = localStorage.getItem("cualquierCosa")
console.log(algoQueNoExiste)

let nullAJSON = JSON.stringify(algoQueNoExiste)
console.log(nullAJSON) */



/* let salida = ""
for (let i = 0; i < productos.length; i++) {
  salida = salida + productos[i].id + " - " + productos[i].nombre + " - " + productos[i].categoria + "\n"
}
alert(salida) */

/* 
let salida = "Lista:\n"
for (const producto of productos) {  
  salida = salida + producto.id + " - " + producto.nombre + " - " + producto.categoria + "\n"
}
alert(salida) */


/* let salida = "Lista:\n"
productos.forEach(producto => {
  salida = salida + producto.id + " - " + producto.nombre + " - " + producto.categoria + "\n"
})
alert(salida) */

/* let salida = "Lista:\n"+productos.map(producto => {
  return producto.id + " - " + producto.nombre + " - " + producto.categoria
}).join("\n")
alert(salida) */



/* buscador.addEventListener("input", buscarValorInput)
buscador.addEventListener("change", () => prueba("change"))

function buscarValorInput() {
  console.log(buscador.value)
} */

/* let boton = document.getElementById("prueba")
console.dir(boton)

// boton.addEventListener("click", miFuncion)
// boton.addEventListener("click", () => miFuncion("Juan"))

// boton.onclick = miFuncion
// boton.onclick = () => miFuncion("Juan")

function miFuncion(nombre) {
  alert("HOLA " + nombre)
} */

/* let cajita = document.getElementById("cajita")
cajita.addEventListener("mousedown", () => prueba("mousedown"))
cajita.addEventListener("mouseover", () => prueba("mouseover"))
cajita.addEventListener("mousemove", () => prueba("mousemove"))
cajita.addEventListener("mouseout", () => prueba("mouseout"))

*/



/* buscador.addEventListener("input", buscarValorInput)
buscador.addEventListener("change", () => prueba("change"))

function buscarValorInput() {
  console.log(buscador.value)
} */

/* let boton = document.getElementById("prueba")
console.dir(boton)

// boton.addEventListener("click", miFuncion)
// boton.addEventListener("click", () => miFuncion("Juan"))

// boton.onclick = miFuncion
// boton.onclick = () => miFuncion("Juan")

function miFuncion(nombre) {
  alert("HOLA " + nombre)
} */

/* let cajita = document.getElementById("cajita")
cajita.addEventListener("mousedown", () => prueba("mousedown"))
cajita.addEventListener("mouseover", () => prueba("mouseover"))
cajita.addEventListener("mousemove", () => prueba("mousemove"))
cajita.addEventListener("mouseout", () => prueba("mouseout"))

*/

/* principal(productos)

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

        let cuota = Number(prompt("Ingrese cantidad de cuotas\n1 cuota de $" + total + "\n3 cuotas sin interés de $" + Math.floor(total / 3) + "\n6 cuotas de $" + Math.floor((total * (9 / 100) + total) / 6) + " con 9% de interés" + "\n12 cuotas de $" + Math.floor((total * (18 / 100) + total) / 12) + " con 18% de interés"
        ))
        if (cuota == 1) {
            alert("Detalle de compra\n" + listarDetalle(carritoDetalle) + "\nTotal a pagar $" + total + "\nGracias por su compra")
        }
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
} */