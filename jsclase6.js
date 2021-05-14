nombre = "pepe"
edad = 25
altura = 180
/* el if es un condicional logico quiere decir que sera true o false */
if (nombre === "pepe" && edad > 20 && console.log("aqui estoy")) /* console.log no retorna nada y lo evalua como FALSE, pasa 
lo mismo con el numero 0 */
    console.log("entré...");
else {
    console.log("No era cierto");
}
    
nombre = "pepe"
edad = 25
altura = 180

if (nombre === "pepe" && edad > 20 && 5) /* siempre los strings y numeros diferentes 
a 0 van a devolver TRUE porque devuelve un valor para js y si va a cumplir el if, si pongo 0
va a dar FALSE y no va a cumplir el if y va a ejecutar else */
    console.log("entré...");
else {
    console.log("No era cierto");
    }