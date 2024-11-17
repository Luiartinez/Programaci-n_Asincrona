let contador = 0;

const temporizador = setInterval(() => {
    contador++;
    console.log("Ejecutando tarea...");

    if (contador === 5) {
        clearInterval(temporizador);
        console.log("Temporizador detenido.");
    }
}, 1000);

