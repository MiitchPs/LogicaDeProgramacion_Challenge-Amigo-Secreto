// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoSorteado = "";


// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpia el campo de entrada
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrarla

    //bucle for para recorrer el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asigna el nombre al contenido del <li>
        listaAmigos.appendChild(li); // Agrega el <li> a la lista
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceAleatorio];

    // Actualiza el contenido del elemento de resultado utilizando document.getElementById() e innerHTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El Amigo secreto sorteado es: ${amigoSorteado}`;
}





