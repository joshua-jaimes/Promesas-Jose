function descargarArchivo(nombreArchivo, callback) {
  console.log(`📥 Descargando ${nombreArchivo}...`);

  setTimeout(() => {
    callback(`✅ Archivo ${nombreArchivo} descargado.`);
  }, 4000);
}

function procesarArchivo(mensaje, callback) {
  console.log("🔄 Procesando archivo...");

  setTimeout(() => {
    callback("📂 Archivo procesado exitosamente.");
  }, 2000);
}

function finalizarProceso(mensaje) {
  console.log(mensaje);
}


descargarArchivo("documento.pdf", function (mensajeDescarga) {
  console.log(mensajeDescarga);

  procesarArchivo(mensajeDescarga, function (mensajeProcesado) {
    console.log(mensajeProcesado);
    finalizarProceso("🎉 Todo el proceso ha finalizado con éxito.");
  });
});
