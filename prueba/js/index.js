//funciones//
function restar (a,b) {     //"restar" el nombre, "a" y "b" los parametros//
    return a - b
}

function tostadora (pan1, pan2, temp) {
    let tostadas = pan1 + pan2 + temp
    console.log(frutas); //puede ser usada ya que fue declarada en el scope global//
    return tostadas
}

//console.log(tostadas); devuelve error ya que tostadas es una variable local//
let frutas

//ejecuto funcion//
let resultado = restar (10,6)
console.log(resultado)

console.log(restar(6,3));
//--------------------------------------//

//Objetos literales//
let celular = {
    modelo : "Iphone 15",
    gb : 200,
    bluetooth : true,
    colores : ["blanco", "negro", "azul"],
    encender : function() {
        return "me encendi" + this.modelo;
    }
}
celular.gb
console.log(celular.colores[2]);
console.log(celular.encender());

//bucle//
for (let i = 0; i<6; i++) {     //i++ suma 1//
    console.log(`saludo numero ${i}`);
}
//recorriendo un array//
let frutas2 = ["Manzana", "Banana", "Uvas", "Kiwi"]
for (let i = 0; i < frutas2.length; i++) {
    console.log(frutas2[i]);
}