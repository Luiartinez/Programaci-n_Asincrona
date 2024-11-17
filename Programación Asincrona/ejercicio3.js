const opciones = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit'
};

setInterval(() => {
    const fecha = new Date().toLocaleString('es-ES', opciones);
    console.log("Fecha y hora actual: " + fecha);
}, 1000);
