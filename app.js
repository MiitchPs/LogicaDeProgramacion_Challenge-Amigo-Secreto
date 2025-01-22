// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


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
        li.textContent = amigos[i]; // Asignar el nombre al contenido del <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}


