function mayusmini(texto){

    if(texto === texto.toUpperCase()){
        return `<p>EL TEXTO ESTA EN MAYUSCULAS</p>`
    }
    else if(texto === texto.toLowerCase()){
        return `<p>El texto esta en minusculas</p>`
    }
    else{
        return `<p>El texto esta en MAYUSCULAS y minusculas</p>`
    }
}

const pantalla = document.getElementById("pantalla")
const texto = prompt("Ingrese un texto:")
const resultado = mayusmini(texto)

pantalla.innerHTML += resultado