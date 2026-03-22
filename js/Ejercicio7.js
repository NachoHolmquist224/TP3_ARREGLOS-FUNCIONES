const multiplicar = (num, i)=>`${num} x ${i} = ${num * i}`

const pantalla = document.getElementById("pantalla")
const num = parseInt(prompt("Ingrese un numero:"))

let lista = "<ul>"
for(let i = 1; i <= 10; i++){
    lista += `<li>${multiplicar(num, i)}</li>`
}
lista += "/<ul>"

pantalla.innerHTML += lista