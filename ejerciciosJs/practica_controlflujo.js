/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edad = 15

if (edad >= 16) {

    console.log("Persona apta para votar")
}
else {

    console.log("Persona no apta para votar")
}
//------------------------------------------------------------------------------
/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
// let cal1= 7
// let cal2= 7
// let cal3= 7
// let cal4= 7
// if(((cal1+cal2+cal3+cal4)/4)>=7){
//     console.log("APROBADO")
// }
// else{
//     console.log("REPROBADO POR VAGO ")
// }
//------------------------------------------------------------------

let calA = prompt("Introduzca Primera Calificación:  ")
calA = Number(calA)
let calB = prompt("Introduzca Segunda Calificación:  ")
calB = Number(calB)
let calC = prompt("Introduzca Tercera Calificación:  ")
calC = Number(calC)
let calD = prompt("Introduzca Cuarta Calificación:  ")
calD = Number(calD)
function calculateProm(calA, calB, calC, calD) {
    let prom = ((calA + calB + calC + calD) / 4)
    return prom
}
if (calculateProm(calA, calB, calC, calD) >= 7) {

    console.log("APROBADO")
}
else {
    console.log("REPROBADO")
}


//-----------------------------------------------------------------------------
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let div = 56
if (((div) % 7 === 0) && ((div) % 8 === 0)) {
    console.log("VERDADERO EL RESULTADO ES DIVISIBLE PARA 7 Y 8")
}
else {
    console.log("FALSO EL RESULTADO NO ES DIVISIBLE PARA 7 Y PARA 8")
}
//---------------------------------------------------------------------------
/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * */
let divi = 21
if (((divi) % 4 === 0) || ((div) % 9 === 0)) {
    console.log("VERDADERO")
}
else {
    console.log("FALSO PORQUE NO ES DIVISIBLE PARA 4 O PARA 9 ")
}
//------------------------------------------------------

/** Ejercicio 5
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

let seleccion = prompt(`Digita el número de la operación a utilizar:
    1. Suma
    2. Resta
    3. Multiplicación
    4. División`)
seleccion = Number(seleccion)
let a = prompt(`Digita el primer número`)
a = Number(a)
let b = prompt(`Digita el segundo número`)
b = Number(b)
let resultado = 0
resultado = Number(resultado)

function calcular(seleccion, a, b, resultado) {

    switch (seleccion) {
        case 1:
            resultado = a + b
            console.log(`El resultado de sumar ${a} + ${b} es igual a ${resultado}`)

            break;

        case 2:
            resultado = a - b
            console.log(`El resultado de restar ${a} - ${b} es igual a ${resultado}`)

            break;

        case 3:
            resultado = a * b
            console.log(`El resultado de multiplicar ${a} * ${b} es igual a ${resultado}`)

            break;

        case 4:
            resultado = a / b
            console.log(`El resultado de dividir ${a} / ${b} es igual a ${resultado}`)

            break;

        default:
            break;
    }
}
calcular(seleccion, a, b, resultado)


//  let num1 = 9
//  let num2 = 3
//  let operador = "*"
//  let resultado = 0


// switch (operador) {
//     case "+":
//         resultado = num1 + num2;
//         console.log(`El resultado de sumar ${num1}+${num2} es igual a ${resultado}`)
//         break

//         case "-":
//         resultado = num1 - num2;
//         console.log(`El resultado de restar ${num1}-${num2} es igual a ${resultado}`)
//         break

//         case "*":
//         resultado = num1 * num2;
//         console.log(`El resultado de multiplicar ${num1}*${num2} es igual a ${resultado}`)
//         break

//         case "/":
//         resultado = num1 / num2;
//         console.log(`El resultado de dividir ${num1}/${num2} es igual a ${resultado}`)
//         break
//         default:
//             console.log("Not Found")
//             break;

// }

//----------------------------------------------------
/** Ejercicio 6
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let inputPeli = prompt(`Introduzca el número del tipo de película para recomendarle algún título
    1. Acción
    2. Drama
    3. Comedia
    4. Romance
    5. Suspenso
    6. Terror`)
inputPeli = Number(inputPeli)
switch (inputPeli) {
    case 1:
        console.log("Chapulín vs Ironman")
        break;
    case 2:
        console.log("La muerte del Chapulín")
        break;
    case 3:
        console.log("Las Aventuras del Chapulín Colorado")
        break;
    case 4:
        console.log("Chapulín Colorado y Julieta")
        break;
    case 5:
        console.log("El embarazo de Julieta")
        break;
    case 6:
        console.log("La venganza de los teletubies")
        break;
    default:
        console.log("Not Found")
        break;

}

// let recomendPeli = "acción"
// recomendPeli = recomendPeli.toLowerCase()

// switch (recomendPeli) {
//     case "acción":
//         console.log("Chapulín vs Ironman")
//         break;
//     case "drama":
//         console.log("La muerte del Chapulín")
//         break;
//     case "comedia":
//         console.log("Las Aventuras del Chapulín Colorado")
//         break;
//     case "romance":
//         console.log("Chapulín Colorado y Julieta")
//         break;
//     case "suspenso":
//         console.log("El embarazo de Julieta")
//         break;
//     case "terror":
//         console.log("La venganza de los teletubies")
//         break;
//     default:
//         console.log("Not Found")
//         break;

// }
//----------------------------------------------------------------------

/** Ejercicio 7
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let inputCajero = prompt(`Introduzca el número de la transacción que deseas realizar:
    1. Retirar Dinero
    2. Transferencia
    3. Depósito
    4. Pago de Servicios
    `)
inputCajero = Number(inputCajero)
if (inputCajero === 1) {
    prompt(`Introduzca la cantidad de dinero a retirar`)
    console.log("No mal gastes el dinero")
}
else if (inputCajero === 2) {
    prompt(`Introduzca la cantidad de dinero a transferir`)
    console.log("Tendremos q ganarnos la lotería")
}
else if (inputCajero === 3) {
    prompt(`Introduzca la cantidad de dinero a Depositar`)
    console.log("Ojalá sea por una buena causa")
}
else if (inputCajero === 4) {
    prompt(`Introduzca la cantidad de dinero para el pago de servicios`)
    console.log("Toca ya que!!!")
}
else { console.log("PONGA MÁS ATENCIÓN A LO QUE HACE Y VUELVA A REALIZAR LA TRANSACCIÓN ") }

// function showCajero(cajero) {
//     cajero = cajero.toLowerCase()
//     switch (cajero) {
//         case "retirar dinero":
//             console.log("No saques mucho")
//             break;
//         case "transferencia":
//             console.log("Cuidado das toda la plata
//             break;
//         case "deposito":
//             console.log("Ojalá sea a tu cuenta")
//             break;
//         case "pago de servicios":
//             console.log("todo es plata")
//             break;
//         default:
//             console.log("Not Found")
//             break;
//     }
// }

// showCajero("pago de servicios")
