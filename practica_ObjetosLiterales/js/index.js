//Objetos literales
//1 y 2)
let misDatos = {
    nombre : "Benicio",
    apellido : "Gravier",
    dni : 46499385,
    comidasFavoritas : ["Burgas", "Fideos", "Asado"],
    age : 19,
    saludar : function() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido 
        + " y tengo " + this.age + " años. Mi primer comida favorita es " + this.comidasFavoritas[0]
    }
}
console.log(misDatos.saludar());

//3 auto
let auto = {
    marca : "Tesla",
    modelo : "Model 3",
    año : 2020,
    color : "blanco",
    posicion : 0,
    avanzar : function(numPositivo) {
        this.posicion = this.posicion + numPositivo
    },
    retorceder : function(numNegativo) {
        this.posicion = this.posicion - numNegativo
    }
}
auto.avanzar(5)
auto.retorceder(2)
console.log(auto.posicion); //posicion final del auto

//4)
let NuevoAuto = {
    marca : "Tesla",
    modelo : "Model 3",
    año : 2020,
    color : "blanco",
    posicion : 0,
    moverse : function(n) {
        this.posicion = this.posicion + n
    }
}
NuevoAuto.moverse(10) //Avanza 10 
NuevoAuto.moverse(-5) //retrocede 5
console.log(NuevoAuto.posicion);

//5) Batalla de superheroes
//Math Random y math floor
console.log(Math.random()*5); //numero aleatorio de 0 a 5

let numeroEntero = Math.floor(Math.random()*5); //numero entero del numeoro que se obtiene
console.log(numeroEntero);

let ironMan = {
    nombre : "Iron Man",
    equipo : "Avengers",
    poderes : ["Volar", "Lanzar misiles", "Disparar láser"],
    energia : 100,
    getPoder : function(num) {
        this.energia = this.energia - 10
        return "Poder Elegido de Iron Man: " + this.poderes[num] + ". Energía restante: " + this.energia
    }
}

let Hulk = {
    nombre : "Hulk",
    equipo : "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia : 100,
    getPoder : function(num2) {
        this.energia = this.energia - 10
        return "Poder Elegido de Hulk: " + this.poderes[num2] + ". Energía restante: " + this.energia
    }
}
//batalla --> se elije entre 0 y 2 ya que es el rango del array de poderes para ambos
console.log(ironMan.getPoder(0));
console.log(Hulk.getPoder(2));
console.log(Hulk.getPoder(1));
console.log(ironMan.getPoder(1));

//extra// 
console.log(ironMan.getPoder(Math.floor(Math.random()*2)));
