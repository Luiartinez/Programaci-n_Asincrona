let numero = 5;

function conteo (){
    console.log(`El tiempo termina en ${numero} segundos` );
    numero--;
    if(numero < 0){
        clearInterval(tiempo);
    console.log("¡Tiempo terminado!");
    }
}
let tiempo = setInterval(conteo, 5000);