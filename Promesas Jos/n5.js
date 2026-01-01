const ingredientes = [
  { nombre: "Pollo", tiempo: 1500 },
  { nombre: "Arroz", tiempo: 1000 },
  { nombre: "Verduras", tiempo: 1200 },
  { nombre: "Salsa", tiempo: 800 },
  { nombre: "Especias", tiempo: 500 }
];

const cocineros = [
  { nombre: "Cocinero 1", ingredientes: [ingredientes[0], ingredientes[1]] },
  { nombre: "Cocinero 2", ingredientes: [ingredientes[2], ingredientes[3]] },
  { nombre: "Cocinero 3", ingredientes: [ingredientes[4]] }
];

function prepararIngredientes(cocinero) {
  return new Promise((resolve) => {
    let tiempoTotal = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      resolve(`👨‍🍳 ${cocinero.nombre} terminó sus ingredientes.`);
    }, tiempoTotal);
  });
}

Promise.all(cocineros.map(prepararIngredientes))
  .then(resultados => {
    resultados.forEach(r => console.log(r));
    console.log("🍽️ Pedido listo");
  });
