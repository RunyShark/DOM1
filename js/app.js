const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBn = document.querySelector("#vaciar-carrito");
const listaCurso = document.querySelector("#lista-cursos");
let articulos = [];

cargarEventListeners();
function cargarEventListeners() {
  listaCurso.addEventListener("click", addCurso);
  carrito.addEventListener("click", deleteCurso);
  vaciarCarritoBn.addEventListener("click", () => {
    articulos = [];
    deleteHTML();
  });
}

function addCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const add = e.target.parentElement.parentElement;
    leerDatos(add);
  }
}
function deleteCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    articulos = articulos.filter((e) => e.id !== cursoId);
  }
  carritoHTML();
}
// function deleteData(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("button u-full-width")) {
//     articulos = [];
//   }
//   carritoHTML();
// }

function leerDatos(curso) {
  const infoCurso = {
    id: curso.querySelector("a").getAttribute("data-id"),
    imagen: curso.querySelector("img").src,
    nombre: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    cantidad: 1,
  };
  const exite = articulos.some((e) => e.id === infoCurso.id);
  if (exite) {
    const carrito = articulos.map((e) => {
      if (e.id === infoCurso.id) {
        e.cantidad++;
        return e;
      }
      return e;
    });
    articulos = [...carrito];
  } else {
    articulos = [infoCurso, ...articulos];
  }

  carritoHTML();
}

function carritoHTML() {
  deleteHTML();
  articulos.forEach((e) => {
    const { imagen, nombre, precio, cantidad, id } = e;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    
    <th>
    <img src="${imagen}" width="100">
    </th>
    <th>
    ${nombre}
    </th>
    <th>
    ${precio}
    </th>
    <th>
    ${cantidad}
    </th>
    <th>
    <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </th>
    `;
    contenedorCarrito.appendChild(row);
  });
}

function deleteHTML() {
  contenedorCarrito.innerHTML = "";
}
