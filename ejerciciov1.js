//1: declarar stock iniciales como constantes


const STOCK_INICIAL_SOJA = 5000;
const STOCK_INICIAL_MAIZ = 8000;

//2: pedir al usuario la cantidad entregada hoy

let entregaSoja = prompt ("¿cuantos kilos de soja se entregaron hoy?"); 
let entregaMaiz = prompt ("¿cuantos kilos de maiz se entregaron hoy?"); 

//esto muestra una ventanita donde el usuario puede escribir el valor.


//3: Convertir los datos a numero decimal

entregaSoja = parseFloat (entregaSoja);
entregaMaiz = parseFloat (entregaMaiz);

//4: Calcular el nuevo stock total

let stockTotalSoja = STOCK_INICIAL_MAIZ + entregaSoja; // en teoria seria 5000 + 3000 
let stockTotalMaiz = STOCK_INICIAL_MAIZ + entregaMaiz; // seria 8000+4000

//5: Mostramos los resultados.
alert ("Stock actualizado: \n" +
    "soja: " + stockTotalSoja + " kg\n" +
    "Maiz: " + stockTotalMaiz + " kg");


