function paroimpar(num){
    if(num % 2 === 0){
        return `<p>${num} es par</p>`
    }
    else{
        return `<p>${num} es impar</p>`
    }
}

const pantalla = document.getElementById("pantalla")
const num = parseInt(prompt("Ingrese un numero:"))
const resultado = paroimpar(num)

pantalla.innerHTML += resultado


