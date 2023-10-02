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
    id: 1710,
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
    nombre: "Lady",
    categoria: "Perfumes",
    stock: 3,
    precio: 1100,
    descripción: "120ml. Fragancias a base de alcohol.",
    rutaImagen: "lady.png"
  },
  {
    id: 564,
    nombre: "Uva",
    categoria: "Perfumes",
    stock: 3,
    precio: 1100,
    descripción: "120ml. Fragancias a base de alcohol.",
    rutaImagen: "uva.png"
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
  <nav id="buscador">
  <h1>TOXIC <span>Cleaning</span></h1>
  
  <div class="filtrar"> 
  <p>Ver productos por categoria</p>
    <button class="filtroCategoria" id="Ceras Liquidas">CERAS LIQUIDAS</button>
    <button class="filtroCategoria" id="Limpiadores">LIMPIADORES</button>
    <button class="filtroCategoria" id="Perfumes">PERFUMES</button>
    <button class="filtroCategoria" id="Exteriores">EXTERIORES</button>
  </div>
  </nav>
  `

function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedorProductos")
  contenedor.innerHTML = ""
  productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta col"
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
      `
      total += producto.subtotal
      divCarrito.appendChild(tarjProdCarrito)

    })

    let divSubTotal = document.createElement("div")

    divSubTotal.innerHTML = `
    <div class="pagar">
      <div class="h5">TOTAL A PAGAR <b>$${total}</b></div>

    </div>
    `
    divCarrito.appendChild(divSubTotal)

    let boton = document.createElement("button")
    boton.className = "btnCompra"
    boton.innerHTML = "FINALIZAR COMPRA"
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

