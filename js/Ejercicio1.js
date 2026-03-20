const meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

pantalla.innerHTML += "<h2>Lista de Meses 📅</h2>"
let lista = "<ul>"
for(i=0; i<meses.length; i++){
 lista += `<li>${meses[i]}</li>`
} 
lista += "/<ul>" 

pantalla.innerHTML += lista