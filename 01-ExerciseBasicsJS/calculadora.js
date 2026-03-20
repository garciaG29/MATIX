//calculator

let num1,num2
alert('Bienvenidos')
num1 = Number(prompt('Digite el numero 1: '))
num2 = Number(prompt('Digite el numero 2: '))

let op = prompt('¿Qué operación deseas realizar?\n1. Suma\n2. Resta\n3. Multiplicación\n4. División');

        if(op == 1){
            let suma = num1 + num2
                alert("La suma es: "+ suma)
        } else if(op == 2){
            let resta = num1 - num2
                alert("La resta es: "+ resta)
        } else if(op == 3){
            let mult = num1 * num2
                alert("La multiplicacion es: "+ mult)
        } else if(op == 4){
            let div = num1 / num2
                alert("La division es: "+ div)
        } else{
                alert("LA OPCION NO EXISTE")
        }

