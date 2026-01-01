function saludarDespuesDe(nombre, tiempo, callback) {
  setTimeout(() => {
    callback(nombre);
  }, tiempo);
}

function mostrarSaludo(nombre) {
  console.log(`👋 ¡Hola, ${nombre}! ¿Cómo estás?`);
}

saludarDespuesDe("Ana", 3000, mostrarSaludo);
