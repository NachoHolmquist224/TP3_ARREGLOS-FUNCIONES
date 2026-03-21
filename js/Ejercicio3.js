const sumas = [];
const apariciones = new Array(13).fill(0);

for(let i = 0; i <= 50; i++){
    const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
    const numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;
    suma= numeroAleatorio1 + numeroAleatorio2;
    sumas.push(suma);
    apariciones[suma]++;
}

pantalla.innerHTML += `<h2>Lista de Sumas </h2>`;

let lista = "<ul>";
for (i = 0; i < sumas.length; i++) {
  lista += `<li>${i}- ${sumas[i]}</li>`;
}
lista += "/<ul>";
pantalla.innerHTML += lista;

pantalla.innerHTML += `<h2>Lista de Apariciones</h2>`;

let lista2 = "<ul>";
for (i = 2; i <= 12; i++) {
  lista2 += `<li>${i}- ${apariciones[i]}</li>`;
}
lista2 += "/<ul>";
pantalla.innerHTML += lista2;


