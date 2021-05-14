/* ejm1 */
let nombre1 = "pepe";
nombre2 = "elon";

/* Array, arreglo, vectores son lo mismo */

clientes = ["pepe", "elon", 23, 3.5]; /* con corchetes invoco un array, en js no importa el tipo de dato para almacenar dato
dentro del array tambien se le puede guardar array  */

console.log(clientes);  /* aqui mostrara todos los clientes dentro del array, todos los valores dentro del array arrancan en 0 luego 1, 2... */
console.log(clientes[1]); /* esto dice muestra clientes sub1, con esto mostrare el valor de la posicion1. */

/* METODOS */
/* Array viene a ser un objeto y por ser objeto tiene una cosa llamada metodo. */
/* Que tenga metodos quiere decir que puedo hacer que un array se comporte de otra manera */

/* ejm2 */
/* Metodo .push */
clientes.push("erick");  /* .push le digo al array que le voy a agregar algun dato a "clientes", es  agregar un elemento al array, 
en este ejemplo estoy agregando erick al array clientes. */
console.log(clientes);

/* ejm3 */

clientes[0] = "jc"; /* aqui reemplazo el valor jc por el valor de la posicion 0 que es pepe */
console.log(clientes); 

/* SCOPE significa que algo esta en otro ambito por eso que un array puede tener un nombre
igual al nombre de una function pero se comportaran distinto */
/* todos los valores fuera de las funciones se considera datos globales, esos datos globales los puedes usar dentro de funciones */

function saludar(cliente) {
    let nombre3 = "maria"  //con let indico que esta variable solamente perteneza y exista adentro de la funcion y que no sea global.
    console.log( "hola" + cliente)
}
//saludar();
/* console.log(nombre3) */


/* ejm4 */

let nombre4 = "fabi";

function saludar() {
    let nombre1 = "chao"  /* en esta variable nombre1 es la que manda y no la global que tiene otro valor y que esta afuera */
    console.log("hola" + nombre1);
}
saludar();
/* console.log(nombre3) */