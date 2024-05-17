//Practica Funciones//
//1) area de rectangulo
function rectangulo(altura, ancho) {
    return altura * ancho
}
console.log(rectangulo(4,4));

//2) area de triangulo
function triangulo(base, altura) {
    return (base * altura)/2
}
console.log(triangulo(4,4));

//3) recuento de un array
function largoDelArray(array) {
    return array.length
}
let array = [1, 4, "hola", "soy crack"]
console.log(largoDelArray(array));

//4) recuento de letras
function cantidadDeLetras (palabra) {
    return palabra.length
}
let pala = "Futbol"
console.log(cantidadDeLetras(pala));

//5) cambio peso a dolar
function dolarHoy(pesos) {
    return pesos / 1025
}
console.log(dolarHoy(5000));

//6) calculo de IVA
function precioFinal(precio) {
    return precio * 1.21
}
console.log(precioFinal(100));

//7) mitad del numero
function mitad(numero) {
    return numero / 2
}
console.log(mitad(100));

//8) dia segun numero 
function diaSegunNumero(array, numero) {
    return array[numero]
}
let fechas = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
console.log(diaSegunNumero(fechas, 5));

//Ejectuando funciones
function siguiente(numero) {
    return numero + 1;
}
console.log(siguiente(3));

function doble(numero) {
    return 2 * numero;
}
console.log(doble(4));
  
function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
}
console.log(siguienteDelDoble(2));
//escribir lo siguiente
function anterior(numero) {
    return numero - 1
}
function triple(numero) {
    return 3 * numero
}
function anteriorDelTriple(numero) {
    return anterior(triple(numero))
}
console.log(anteriorDelTriple(3));