const ventas = [
  { id: 1, idarticulo: 101, cantidad: 2 },
  { id: 2, idarticulo: 102, cantidad: 1 },
  { id: 3, idarticulo: 103, cantidad: 3 },
  { id: 4, idarticulo: 101, cantidad: 4 },
  { id: 5, idarticulo: 101, cantidad: 1 },
  { id: 6, idarticulo: 104, cantidad: 1 },
  { id: 7, idarticulo: 102, cantidad: 7 }
];

const articulos = [
  { idarticulo: 101, nombre: "Televisor" },
  { idarticulo: 102, nombre: "Nevera" },
  { idarticulo: 103, nombre: "Lavadora" },
  { idarticulo: 104, nombre: "Estufa" }
];

function obtenerVentas() {
  return new Promise((resolve) => {
    resolve(ventas.filter(v => v.cantidad > 3));
  });
}

function obtenerArticulo(idarticulo) {
  return new Promise((resolve) => {
    resolve(articulos.find(a => a.idarticulo === idarticulo));
  });
}

obtenerVentas()
  .then(resultado => {
    resultado.forEach(v => {
      obtenerArticulo(v.idarticulo).then(articulo => {
        console.log(
          `${articulo.nombre} (id=${articulo.idarticulo}) tuvo ${v.cantidad} ventas`
        );
      });
    });
  });
