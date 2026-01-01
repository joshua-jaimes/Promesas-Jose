
function prepararDesayuno(callback) {
  console.log("🥞 Preparando panqueques...");

  setTimeout(() => {
    callback("✅ Panqueques listos para servir.", servirJugo);
  }, 3000);
}

function servirDesayuno(mensaje, callbackJugo) {
  console.log(mensaje);
  callbackJugo();
}

function servirJugo() {
  console.log("🍊 Jugo de naranja servido.");
}

prepararDesayuno(servirDesayuno);
