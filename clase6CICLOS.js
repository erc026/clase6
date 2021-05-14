//CICLOS - BUCLES - Estructuras repetitivas
/* es repetir algo una n cantidad de veces */

/* parametros es para decir cuantas veces voy a ejecutar el codigo que esta dentro de las llaves */
for (let cantidad = 1; cantidad <= 3; ++cantidad) {
    /* Aqui digo que arranca con cantidad 1; quedate adentro mientras que la variable cantidad sea menor o igual a 3;
    le digo que le sume 1 a la cantidad variable por vuelta */
    console.log("hola");
}
console.log("FIN");

/* ejm2: */

for (let cantidad = 1; cantidad <= 3; ++cantidad) {
    
    console.log(cantidad);
}
console.log("FIN");

/* Asi como array tiene METODOS, tambien tiene PROPIEDADES */

/* ejm3 */

empresas = ["dell", "lenovo", "LG"]
    
/* empresas.length propiedad length me dice cuantos elementos tienen adentro del arreglo */
console.log("cantidad de elementos ", empresas.length)


for (cantidad = 0; cantidad <= 2; cantidad++) {
    console.log(empresas[cantidad]); /* aqui digo que me muestre los valores del array empresa pero con sub cantidad,
        cantidad va a tomar el valor 0 por el parametro for y mostrara la posicion de dell y mostrara en pantalla */
}

/* ejm4 */

empresas = ["dell", "lenovo", "LG", "Panasonic", "Nike"]
console.log("cantidad de elementos ", empresas.length)
for (cantidad = 0; cantidad < empresas.length; cantidad++) {
    /* con la propiedad length ya asigno automaticamente la
    cantidad de elementos que tiene el array y en base a eso va a hacer el ciclo for, si no le pongo length, manualmente
    tendre que poner la cantidad de elementos del array cada ves que en array ponga un nuevo elemento */
    console.log(empresas[cantidad]);
}

/* WHILE
while(mientras) es casi similar al for, solo que se escribe diferente */

/* ejm1 */

empresas1 = ["dell", "lenovo", "LG", "Panasonic", "Nike"]

let cantidad1 = 0 /* en while tengo que poner la variable fuera de los parametros while, cosa que 
en for podias poner las variables dentro de los parametros */

while (cantidad1 < empresas1.length) { //mientras se cumpla la condicion, va a ejecutar el bloque de codigo
    console.log(empresas1[cantidad1]);
    cantidad1++;
}


/* en JS hay formas para hacer cosas repetitivas en ves de las anteriores */

empresas3 = ["dell", "lenovo", "LG", "Panasonic", "Nike"]
console.log("cantidad de elementos ", empresas3.length)
empresas3.forEach( function(empresa3) {}) /* adentro del parametro() foreach tengo que pasarle una funcion y foreach dice:
ejecutar la funcion tantas veces como elementos tenga el Array empresas3.  */
/* el valor que tendra la funcion puede ser en singular del array que esta en Plural porque voy a llamar a un elemento de todos
que estan en ese array */
//function("dell") { /*  es util porque cada empresa va a desplegar una funcion distinta a la demas y foreach me ayudara en eso */

//}
//function("lenovo") {
    
//}

//imperativo: para hacer una accion le tengo  que dar mucha explicacion como for y while.
//Declarativos: no doy tantos detaches para realizar una accion, simplemente declarar como el foreatch

/* ejm2 */

empresas4 = ["dell", "lenovo", "LG", "Panasonic", "Nike"]
console.log("cantidad de elementos ", empresas4.length)

empresas4.forEach(mostrarEmpresa4)/*  aqui digo, para cada valor que tenga el array empresas3, ejecuta la funcion mostrarEmpresa4 */

function mostrarEmpresa4(empresa4) { /* parametro empresa4 va a tomar el valor de cada elemento del array */
    console.log(empresa4)
}

/* diferencia en while y do while es que do while va a supervisar la conducion pero en la ultima parte */

empresas5 = ["dell", "lenovo", "LG", "Panasonic", "Nike"]
console.log("cantidad de elementos ", empresas5.length)
cantidad5 = 0
do { /* do significa haz */ /* haz este bloque */
     console.log(empresas5[cantidad5]);
    cantidad5++;
} while (cantidad < empresas5.length); /* luego si cumple la condicion vuelve a repetir, si No, no */
/* do while primero hace una cosa y luego condiciona y el while primero condiciona y si es verdad, ejecutara el bloque de codigo */
