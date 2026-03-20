let suma = document.getElementById("sum")
suma.addEventListener("click",function(){
    let n1 = document.getElementById("num1").value
    let n2 = document.getElementById("num2").value

    if (n1 === "" || n2 === ""){
        alert("Debes ingresar ambos numeros")
        return
    } 
    let num1 = Number(n1)
    let num2 = Number(n2)
    let totalsuma = num1 + num2

    document.getElementById("resultado").innerText = num1 + " + " + num2 + '\n' + " = " + totalsuma
    
})

let resta = document.getElementById("rest")
resta.addEventListener("click",function(){
    let n1 = document.getElementById("num1").value
    let n2 = document.getElementById("num2").value

    if (n1 === "" || n2 === ""){
        alert("Debes ingresar ambos numeros")
        return
    } 
    let num1 = Number(n1)
    let num2 = Number(n2)
    let totalresta = num1 - num2

    document.getElementById("resultado").innerText = num1 + " - " + num2 + '\n' + " = " + totalresta
})

let mult = document.getElementById("mult")
mult.addEventListener("click",function(){
    let n1 = document.getElementById("num1").value
    let n2 = document.getElementById("num2").value

    if (n1 === "" || n2 === ""){
        alert("Debes ingresar ambos numeros")
        return
    } 
    let num1 = Number(n1)
    let num2 = Number(n2)
    let totalmult = num1 * num2

    document.getElementById("resultado").innerText = num1 + " × " + num2 + '\n' + " = " + totalmult
})

let div = document.getElementById("div")
div.addEventListener("click",function(){
    let n1 = document.getElementById("num1").value
    let n2 = document.getElementById("num2").value

    if (n1 === "" || n2 === ""){
        alert("Debes ingresar ambos numeros")
        return
    } 
    let num1 = Number(n1)
    let num2 = Number(n2)
    if(num2 === 0){ 
        alert("No se permite la division por 0")
        return
    }

    let totaldiv = num1 / num2

    document.getElementById("resultado").innerText = num1 + " ÷ " + num2 + '\n' + " = "+ totaldiv
    
})