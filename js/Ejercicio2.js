const provincias = [];

do{
    const provincia = prompt("Ingrese una provincia:");
    provincias.push(provincia);
}while(confirm("¿Desea ingresar otra provincia?"))

const pantalla = document.getElementById("pantalla")
pantalla.innerHTML += `<p>El arreglo generado queda asi ${provincias}</p> <br>`

pantalla.innerHTML += `<p>La longitud del arreglo es "${provincias.length}"</p> <br>`

pantalla.innerHTML += `<p>El primer elemento del arreglo es "${provincias[0]}"</p> <br>`

pantalla.innerHTML += `<p>El tercer elemento del arreglo es "${provincias[2]}"</p> <br>`

pantalla.innerHTML += `<p>El ultimo elemento del arreglo es "${provincias[provincias.length-1]}"</p> <br>`

provincias.push("Neuquen")

pantalla.innerHTML += `<p>Agregamos Neuquen al final del arreglo: ${provincias}</p> <br>`

pantalla.innerHTML += `<p>El elemento que ocupa la segunda posicion es ${provincias[1]}</p> <br>`

provincias.splice(1,1, "Tierra del fuego")

pantalla.innerHTML += `<p>Ahora el elemento que ocupa la segunda posicion es ${provincias[1]}: ${provincias}</p> <br>`