//Declaracion e inicializacion de Arrays (LISTAS)

let myArray = [1,2,3,4] //numeros

let myArray2 = ["Ximena","Laura","Anyi"] //texto

let myArray3 = ["Ximena", "Laura", 18, 20, true] //combinados

// push y pop (push es para añadir y pop para eliminar los ultimos elementos de la lista)
myArray3.push("Daniel","Sara")
console.log(myArray3)

myArray3.pop()
console.log(myArray3)

// shift y unshift (para añadir o quitar los primeros elementos de la lista)

console.log(myArray3.shift()) //QUITAR DE PRIMERAS
console.log(myArray3)

myArray3.unshift("Hola","Mundo") //Añadir DE PRIMERAS
console.log(myArray3)