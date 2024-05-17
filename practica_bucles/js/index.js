//Practica Bucles
//1) Precalentando
for (let i = 0; i<5; i++) {
    console.log("Practicando con el bucle for");
}
for (let i =0; i<10; i ++) {
    console.log(`La variable ${i} tiene el valor valorDei`);
}
for (let i = 2; i<22; i = i+2) {
    console.log(i);
}
for (let i = 5; i<275; i = i+5) {
    console.log(i);
}
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

//2) Tabla de multiplicar
let base = 2
let resultados = []
for (let i = 1; i<11; i++) {
    let nuevo = base * i
    resultados.push(nuevo)
}
console.log(resultados);

//3) Obteniendo el total
let ganancias = [10,3,-3,8,11,15,-1,50,23,-55]
let suma = 0
for (i = 0; i<ganancias.length; i++) {
    suma = suma + ganancias[i]
}
console.log(suma);

//4) Recorriendo arrays
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously']    
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(`${i+1} ${healingIsDifficult[i]}`);
}

//5) Recorriendo arrays de objetos literales
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i = 0; i < got.length; i++) {
    console.log(`Hola ${got[i].nombre} ${got[i].apellido} criatura viajera!`);
}
for (let i = 0; i < got.length; i++) {
    console.log(`Soy ${got[i].nombre} ${got[i].apellido} de la ciudad ${got[i].ciudad}`);
}