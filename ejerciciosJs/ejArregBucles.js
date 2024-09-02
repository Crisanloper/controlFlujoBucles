/** Ejercicio 1
 * 
 * Desarrolla una función que, imprima todos los numeros del 0 al 100 y compare 
 * que numeros son divisibles entre 4 o 9
 * 
 * Consideraciones
 * Asignarle un nombre significativo a la función declarada
 * Si el numero es divisible entre 4, imprimir un mensaje alusivo a costado del numero
 * Mismo caso para todos los numeros divisibles entre 9
 */


function divisiblescuatronueve() {
    for (i = 0; i <= 100; i++) {
        if (i % 4 == 0 && i % 9 == 0) {
            console.log(i + " Es divisible enter 4 y 9")
        } else if (i % 4 == 0) {
            console.log(i + " Es divisible entre 4")
        } else if (i % 9 == 0) {
            console.log( i + "  Es divisible para 9")
        } else {
            console.log(i)
        }

    }
}
divisiblescuatronueve()

/** Ejercicio 2
 * 
 * Declara una variable y asignale como valor un arreglo vacio
 * Elabora una iteracion que ayude a llenar el arreglo con los numeros del 1 al 10
 * Al final, e debera obtener un arreglo con los numeros ordenados de manera descendente
(10 - 1)
 * 
 * Consideraciones
 * Asigna un nombre significativo a la variable
 * Utiliza el metodo para arreglos adecuado para cumplir con el objetivo del ejercicio
*/
let v = []
for (let i = 1;
    i <= 10;
    i++) {
        v.push(i)
}
v.reverse()
console.log(v)
 
//Ejercicio 3
/**Crea un bucle que sume los numeros del 1 al 100
resultado final 5050*/

function sumarNums() {
    let a = 0
    let i = 1

    for (i = 1; i <= 100; i++) {
        a += i
        console.log(a)

    }
}
sumarNums()