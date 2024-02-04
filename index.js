const productos = [
  {id:0, nombre: "Cocacola", precio: 1900.99,img:'img/1.jpg}'},
  { id:1,nombre: "Fanta", precio: 1900.99,img:'img/2.jpg}' },
  { id:2,nombre: "Sprite", precio: 1900.99 ,img:'img/3.jpg}'},
  { id:3,nombre: "Quilmes", precio: 2300.99,img:'img/4.jpg}'},
  { id:4,nombre: "Fernet", precio: 7000.99,img:'img/5.jpg}'},
  { id:5,nombre: "Gancia", precio: 5400.99,img:'img/6.jpg}'},
  { id:6,nombre: "Campari", precio: 5200.99 ,img:'img/7.jpg}'},
  { id:7,nombre: "Smirnof", precio: 10000.99,img:'img/8.jpg}'},
  { id:8,nombre: "Tequila", precio: 15000.99,img:'img/9.jpg}'},
  { id:9,nombre: "Ron", precio: 17000.99,img:'img/10.jpg}'},
  { id:10,nombre: "Ginebra", precio: 14000.99,img:'img/11.jpg}'},
  { id:11,nombre: "Coñac", precio: 8000.99,img:'img/12.jpg}' },
  { id:12,nombre: "Vino tinto", precio: 7000.99,img:'img/13.jpg}' },
  { id:13,nombre: "Vino dulce", precio: 7500.99,img:'img/14.jpg}'},

]
  

let carrito = [];

function mostrarProductos() {
  const productosElement = document.getElementById('productos');
  productosElement.innerHTML = '';

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2', 'p-2');
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button class="btn btn-primary btnAgregarCarrito" data-id="${producto.id}">Agregar al carrito</button>
    `;
    productosElement.appendChild(card);
  });

  const btnAgregarCarrito = document.getElementsByClassName('btnAgregarCarrito');
  for (let i = 0; i < btnAgregarCarrito.length; i++) {
    btnAgregarCarrito[i].addEventListener('click', agregarAlCarrito);
  }
}

function agregarAlCarrito(event) {
  const id = event.target.dataset.id;
  const producto = productos.find(producto => producto.id === parseInt(id));
  if (producto) {
    carrito.push(producto);
    mostrarCarrito();
  }
}

function mostrarCarrito() {
  const carritoElement = document.getElementById('carrito');
  carritoElement.innerHTML = '';

  carrito.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2', 'p-2');
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
    `;
    carritoElement.appendChild(card);
  });

  calcularSumaTotal();
}

function eliminarProducto(id) {
  const index = carrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
    mostrarCarrito();
  }
}

function calcularSumaTotal() {
  const sumaTotalElement = document.getElementById('sumaTotal');
  const sumaTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
  sumaTotalElement.innerHTML = "Suma total: $".concat(sumaTotal.toFixed(2));
}

function confirmarCompra() {
  // Realizar acciones para confirmar la compra
  alert("¡Gracias por tu compra!");
  vaciarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

const btnConfirmarCompra = document.getElementById('btnConfirmarCompra');
btnConfirmarCompra.addEventListener('click', confirmarCompra);

mostrarProductos();

 

 

