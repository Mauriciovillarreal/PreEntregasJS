
fetch("./info.json")
  .then(respuesta => respuesta.json())
  .then(productos => pirncipal(productos))

function pirncipal(productos) {
  let carritoRecuperado = localStorage.getItem("containerCarrito")
  let carrito = carritoRecuperado ? JSON.parse(carritoRecuperado) : []
  renderizarCarrito(carrito)
  renderizarProductos(productos, carrito)

  let buscador = document.getElementById("buscador")
  buscador.addEventListener('input', () => filtrarYRenderizar(productos, carrito));
  let navbar = document.getElementById("navBar")
  navbar.className = "navbar__me---desktop"
  navbar.innerHTML = `
  <nav id="buscador">
  <h1>TOXIC <span>Cleaning</span></h1>
  <div class="filtrar"> 
  <p>Categorías principales</p>
    <button class="filtroCategoria" id="Ceras Liquidas">CERAS LIQUIDAS</button>
    <button class="filtroCategoria" id="Limpiadores">LIMPIADORES</button>
    <button class="filtroCategoria" id="Perfumes">PERFUMES</button>
    <button class="filtroCategoria" id="Exteriores">EXTERIORES</button>
  </div>
  </nav>
  `
  let botonesCategorias = document.getElementsByClassName("filtroCategoria")
  for (const botonCategoria of botonesCategorias) {
    botonCategoria.addEventListener("click", (e) => filtrarPorCategoria(e, productos, carrito))
  }
  let botonVerOcultar = document.getElementById("verOcultar")
  botonVerOcultar.addEventListener("click", verOcultarCarrito)
}

function filtrarYRenderizar(productos, carrito) {
  let productosFiltrados = productos.filter(producto => (producto.nombre.toLowerCase()).includes(buscador.value))
  renderizarProductos(productosFiltrados, carrito)
}

function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedorProductos")
  contenedor.innerHTML = ""
  productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta col"
    tarjeta.innerHTML = `
    <div class="h3">${producto.nombre}</div>
    <div class="h6">${producto.categoria}<div>
    <img class=imagenProducto src=./img/${producto.rutaImagen} />
    <hr>
    <p class="h6 text-start">${producto.descripción}</p>
    <div class="h5 text-start">$${producto.precio}</div>
    <button  class="button h6" id=${producto.id}>AÑADIR AL <span>CARRITO</span>
    <img src="./img/anadir-al-carrito.png" width="18px">
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
      Toastify({

        text: "Producto agregado",
        className: "info",
        style: {
          background: "chartreuse",
          color: "black"
        },
        duration: 1000,
        className: "tostada"
      }).showToast();
    } else {
      carrito.push({
        rutaImagen: productoBuscado.rutaImagen,
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
      })
      Toastify({
        text: "Producto agregado",
        style: {
          background: "chartreuse",
          color: "black"
        },
        className: "tostada",
        duration: 1000
      }).showToast();
    }
    productoBuscado.stock--
    localStorage.setItem("containerCarrito", JSON.stringify(carrito))
  } else {
    Toastify({

      text: "Sin stock",
      style: {
        background: "red",
      },
      duration: 1000,
      className: "tostada"
    }).showToast();
  }
  renderizarCarrito(carrito)
}

function renderizarCarrito(productosEnCarrito) {
  let divCarrito = document.getElementById("containerCarrito")
  if (productosEnCarrito.length > 0) {
    total = 0
    divCarrito.innerHTML = ""
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
  
  let carrito = document.getElementById("containerCarrito")
  carrito.innerHTML = ""
  localStorage.removeItem("containerCarrito")
  Swal.fire({
    title: 'Gracias por su compra!',
    text: 'By TOXIC CLEANING',
    icon: 'success'
  }) 
}

function verOcultarCarrito() {
  let carrito = document.getElementById("carrito")
  let contenedorProductos = document.getElementById("contenedorCarrito")
  carrito.classList.toggle("oculta")
  contenedorProductos.classList.toggle("oculta")
}

function filtrarPorCategoria(e, productos, carrito) {
  console.log(e)
  let productosFiltrados = productos.filter(producto => {
    return producto.categoria === e.target.id
  })
  renderizarProductos(productosFiltrados, carrito)
}



