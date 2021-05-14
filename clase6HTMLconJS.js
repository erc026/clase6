console.log("hola mundo");
/* document es una palabra reserva pero es mas un objeto, es como una variable ya creada que se puede usar
document represante el documento area blanca de HTML */


let elemento = document.getElementById("contenedor") /* getElementById dice: dame el elemento que tenga por id "contenedor" */
/* a ese getElementById lo podriamos poner en una variable */

elemento.innerHTML = "<h1> hola mundo</h1> <h2> holaaa </h2>" /* inerhtml es una propiedad */
/* al elemento que acabas de agarrar que seria "un div id contenedor de html" le quiero asignar un valor
y ahi ese valor en ves de mostrar por consola lo va a mostrar en la pagina html */

/* JS procesa "<h1> hola mundo</h1> <h2> holaaa </h2>" como un string pero con la propiedad innerHTML lo va
a renderizar en HTML */