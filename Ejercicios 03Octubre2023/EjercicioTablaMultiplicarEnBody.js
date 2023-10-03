


let num = prompt("Introduzca un numero para sacar tabla de multiplicar");
while (isNaN(num)||num<0) {
    num = prompt("Error, introduzca un numero para sacar tabla de multiplicar")
}


//Obtenemos el elemento contenedor
const contenedor=document.querySelector(".container");
// Creamos un nuevo elemento div para mostrar la tabla de multiplicar
const nuevo_div = document.createElement("div");


for (let i = 0; i <= 10; i++) {
    // Creamos un nuevo nodo de texto con la multiplicación
    let resultado = num * i;
    let nodo_texto = document.createTextNode(num + " * " + i + " = " + resultado);
    // Creamos un  elemento div por cada multiplicacion
    const nueva_linea_div = document.createElement("div");
    
    // Añadimos el nodo de texto al div
    nueva_linea_div.appendChild(nodo_texto);
    
    // Añadimos el div al contenedor
    contenedor.appendChild(nueva_linea_div);
}

