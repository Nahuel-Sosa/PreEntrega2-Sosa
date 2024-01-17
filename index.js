 
const productos = [
  { id:1, nombre: " Cocacola", precio: 1900.99, img:'1.jpg'},
  { id:2,nombre: "Fanta", precio: 1900.99 },
  { id:3,nombre: "Sprite", precio: 1900.99 },
  { id:4,nombre: "Quimes", precio: 2300.99 },
  { id:5,nombre: "Fernet", precio: 7000.99 },
  { id:6,nombre: "Gancia", precio: 5400.99 },
  { id:7,nombre: "Campari", precio: 5200.99 },
  { id:8,nombre: "Smirnof", precio: 10000.99 }]
  
  let carrito = [];

function mostrarProductos() {
  const productosElement = document.getElementById('productos');
  productosElement.innerHTML = '';

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    productosElement.appendChild(card);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(producto => producto.id === id);
  if (producto) {
    carrito.push(producto);
    mostrarCarrito();}}

function mostrarCarrito() {
  const carritoElement = document.getElementById('carrito');
  carritoElement.innerHTML = '';

  carrito.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
  
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
 

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}


mostrarProductos();
 
