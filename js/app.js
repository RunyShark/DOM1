const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBn = document.querySelector("#vaciar-carrito");
const listaCurso = document.querySelector("#lista-cursos");

cargarEventListeners();
function cargarEventListeners() {
  listaCurso.addEventListener("click", addCurso);
}

function addCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target);
  }
}
